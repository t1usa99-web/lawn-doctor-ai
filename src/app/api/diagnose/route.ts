import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Lawn Doctor AI, an expert lawn care diagnostician. When shown a photo of a lawn, you analyze it carefully and provide a structured diagnosis.

You MUST respond with valid JSON in exactly this format (no markdown, no code fences, just raw JSON):
{
  "diagnosis": "A 2-3 sentence summary of what you see and the likely condition.",
  "severity": "low" | "moderate" | "severe",
  "issues": ["List of specific problems identified, each as a clear sentence"],
  "recommendations": ["Numbered treatment steps the homeowner should take, each as a clear actionable sentence"],
  "quickTips": ["2-3 general lawn maintenance tips relevant to preventing this issue"]
}

Guidelines:
- Be specific but accessible — avoid excessive jargon
- If the image is clearly NOT a lawn or plant, set diagnosis to explain that you need a lawn photo, severity to "low", and leave other arrays empty
- Consider common lawn diseases (brown patch, dollar spot, rust), pests (grubs, chinch bugs), weeds, nutrient deficiencies, watering issues, and mowing problems
- Recommendations should be practical for a homeowner (not commercial-grade solutions)
- Always mention when it might be worth consulting a local lawn care professional`;

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Set ANTHROPIC_API_KEY in your environment.' },
        { status: 500 }
      );
    }

    // Extract base64 data and media type from data URL
    const match = image.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) {
      return NextResponse.json({ error: 'Invalid image format' }, { status: 400 });
    }

    const mediaType = match[1] as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
    const base64Data = match[2];

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: mediaType,
                data: base64Data,
              },
            },
            {
              type: 'text',
              text: 'Please analyze this lawn photo and provide your diagnosis.',
            },
          ],
        },
      ],
    });

    // Extract text response
    const textBlock = message.content.find((block) => block.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text response from AI');
    }

    // Parse JSON response
    const diagnosisData = JSON.parse(textBlock.text);

    return NextResponse.json(diagnosisData);
  } catch (error) {
    console.error('Diagnosis error:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.' },
        { status: 500 }
      );
    }

    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
