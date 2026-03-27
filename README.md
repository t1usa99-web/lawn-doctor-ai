# Lawn Doctor AI

AI-powered lawn diagnosis — upload a photo and get instant analysis with treatment recommendations.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your API key:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Anthropic API key from [console.anthropic.com](https://console.anthropic.com/)

3. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub Repo
3. Add the `ANTHROPIC_API_KEY` environment variable in Railway's settings
4. Railway will auto-detect Next.js and deploy

## Tech Stack

- **Next.js 14** — Full-stack React framework
- **Tailwind CSS** — Utility-first styling
- **Claude API** — Vision-powered lawn analysis
- **Railway** — Deployment platform
