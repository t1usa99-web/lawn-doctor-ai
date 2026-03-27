'use client';

import { useState, useRef, useCallback } from 'react';
import DiagnosisResult from '@/components/DiagnosisResult';
import Header from '@/components/Header';

interface DiagnosisData {
  diagnosis: string;
  severity: 'low' | 'moderate' | 'severe';
  issues: string[];
  recommendations: string[];
  quickTips: string[];
}

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<DiagnosisData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, etc.)');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be under 10MB');
      return;
    }

    setError(null);
    setDiagnosis(null);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragging(false);
  }, []);

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);
    setDiagnosis(null);

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to analyze image');
      }

      const data = await response.json();
      setDiagnosis(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setFileName('');
    setDiagnosis(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            What&apos;s wrong with your lawn?
          </h2>
          <p className="text-gray-600 text-lg">
            Upload a photo and our AI will diagnose the issue and recommend treatments.
          </p>
        </div>

        {/* Upload Zone */}
        {!image && (
          <div
            className={`upload-zone ${dragging ? 'dragging' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-lawn-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-700">
                Drop your lawn photo here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse — JPG, PNG up to 10MB
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
          </div>
        )}

        {/* Image Preview */}
        {image && !diagnosis && (
          <div className="diagnosis-card">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img
                src={image}
                alt="Lawn photo"
                className="w-full max-h-[400px] object-cover rounded-xl"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4 truncate">{fileName}</p>
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Diagnose My Lawn
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                disabled={loading}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-3 rounded-full">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-lawn-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-lawn-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-lawn-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-lawn-dark font-medium">Examining your lawn...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-red-800 font-medium">Analysis failed</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {diagnosis && (
          <div className="mt-6">
            <DiagnosisResult data={diagnosis} image={image!} onReset={handleReset} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>Lawn Doctor AI &mdash; Powered by Claude Vision</p>
        <p className="mt-1">For informational purposes only. Consult a lawn care professional for severe issues.</p>
      </footer>
    </main>
  );
}
