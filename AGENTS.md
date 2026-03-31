<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### Overview
This is a single-service Next.js 16 portfolio site (no monorepo, no database, no Docker). All data is hardcoded in `src/data/`.

### Running the app
- `npm run dev` — starts the dev server on port 3000.
- `npm run build` — production build (Turbopack).
- `npm run lint` — runs ESLint.

### AI Chat fallback
The AI Chat feature (`/api/chat`) works without `OPENAI_API_KEY`; it returns hardcoded local responses from `src/data/portfolio-context.ts`. Set `OPENAI_API_KEY` and optionally `OPENAI_MODEL` env vars only if you want live OpenAI integration.

### Next.js version caveat
This project uses **Next.js 16.2.1** which may have breaking changes vs. prior versions. Read `node_modules/next/dist/docs/` before modifying Next.js-related code.
