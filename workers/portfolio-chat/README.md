# Portfolio Chat Worker

포트폴리오 AI 챗봇용 Cloudflare Worker. Workers AI(Llama 3.1 8B, 무료 티어)로 동작합니다.

## 배포 (1회, 약 5분)

```bash
cd workers/portfolio-chat
npx wrangler login        # Cloudflare 계정 연결 (연금 앱과 동일 계정)
npx wrangler deploy       # 배포 → https://portfolio-chat.<계정>.workers.dev 발급
```

## 사이트 연결

발급된 URL을 빌드 환경변수로 설정:

- **GitHub Pages**: 레포 Settings → Secrets and variables → Actions → Variables에
  `NEXT_PUBLIC_CHAT_API_URL` 추가 후, `.github/workflows/nextjs.yml`의 Build 단계에
  `env: NEXT_PUBLIC_CHAT_API_URL: ${{ vars.NEXT_PUBLIC_CHAT_API_URL }}` 추가
- **Vercel**: 프로젝트 Settings → Environment Variables에 동일 키 추가

환경변수가 없으면 기존 로컬(정적) 응답으로 자동 폴백되므로 사이트는 항상 동작합니다.

## 컨텍스트 동기화

`src/data/portfolio-context.ts` 수정 후:

```bash
node scripts/sync-worker-context.js && npx wrangler deploy
```
