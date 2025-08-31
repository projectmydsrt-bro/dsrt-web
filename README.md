![CI](https://github.com/projectmydsrt-bro/dsrt-web/actions/workflows/ci.yml/badge.svg)
![Coverage](https://codecov.io/gh/projectmydsrt-bro/dsrt-web/branch/main/graph/badge.svg)
![Release](https://img.shields.io/github/v/release/projectmydsrt-bro/dsrt-web)
![License](https://img.shields.io/github/license/projectmydsrt-bro/dsrt-web)
![Dependabot](https://img.shields.io/badge/dependabot-up%20to%20date-brightgreen)
![Vercel](https://img.shields.io/badge/deploy-vercel-blue)

Deskripsi singkat
-----------------
dsrt-web adalah frontend untuk proyek DSRT — aplikasi web modern dengan deployment otomatis (Vercel), backend Supabase, dan integrasi ML (Replicate). Repo ini berfokus pada developer experience, CI, security, dan release automation.

Quick start
-----------
1. Clone
   git clone https://github.com/projectmydsrt-bro/dsrt-web.git
   cd dsrt-web

2. Install
   npm ci

3. Environment
   cp .env.example .env
   isi variabel (jangan commit .env)

4. Run dev
   npm run dev

5. Test & build
   npm test
   npm run build

Badges & prerequisites
----------------------
- CI badge: GitHub Actions (already configured: .github/workflows/ci.yml).
- Coverage badge: Codecov — aktifkan repo di https://codecov.io dan tambahkan secret CODECOV_TOKEN (hanya untuk private repos).
- Release badge: semantic-release workflow (.github/workflows/release.yml).
- Dependabot: .github/dependabot.yml included.
- Vercel: connect repo to Vercel to enable Vercel badge/deployments.

Repository structure (recommended)
----------------------------------
- README.md
- LICENSE
- .env.example
- .gitignore
- package.json, package-lock.json
- src/
- public/
- tests/
- .github/
  - workflows/ci.yml
  - workflows/release.yml
  - workflows/codeql-analysis.yml
  - dependabot.yml
  - ISSUE_TEMPLATE/
  - PULL_REQUEST_TEMPLATE.md
  - CODEOWNERS

Contributing & Code of Conduct
------------------------------
- Lihat CONTRIBUTING.md untuk panduan kontribusi.
- Lihat CODE_OF_CONDUCT.md untuk aturan komunitas.

Security
--------
- Jika menemukan kerentanan, ikuti petunjuk di SECURITY.md (laporan privat).
