# 📊 shinwonfi-homepage 프로젝트 분석 보고서

`shinwonfi-homepage` 디렉토리를 분석한 결과입니다.

## 1. 기술 스택 (Tech Stack)
- **프레임워크:** Next.js 15.1 (App Router 기반)
- **UI/스타일링:** React 19, Tailwind CSS, Framer Motion (애니메이션), Lucide React (아이콘)
- **데이터베이스/ORM:** MySQL 8.0, Prisma (v6.19)
- **언어 및 도구:** TypeScript, ESLint, Zod (데이터 검증)

## 2. 프로젝트 구조 (Architecture)
최신 Next.js App Router(`src/app`) 패턴을 따르고 있습니다.
- **`src/app/(public)`**: 일반 사용자가 접근하는 퍼블릭 홈페이지 영역 (회사 소개, 브랜드 소개, 제품 정보, 문의하기 등)
- **`src/app/ecms`**: 관리자(Admin/CMS) 영역. 사내에서 홈페이지 콘텐츠(공지사항, 문의 내역 등)를 관리하기 위한 대시보드입니다.
- **`src/app/api`**: 클라이언트에서 호출하는 백엔드 API 라우트
- **`src/components`**: 재사용 가능한 UI 컴포넌트 모음
- **`src/lib`**: 공통 유틸리티 및 설정(인증 로직, DB 클라이언트 등) 파일들

## 3. 주요 기능 및 데이터 모델 (DB Schema)
`prisma/schema.prisma`를 통해 다음 주요 테이블(모델)을 확인했습니다.

1. **`Inquiry` (문의하기)**
   - 사용자가 홈페이지에서 남기는 문의 내역을 저장합니다.
   - 필드: 이름, 연락처, 이메일, 관심 분야, 문의 내용, 처리 상태(대기/진행/완료) 등

2. **`Notice` (공지사항)**
   - 홈페이지에 정기적으로 게시되는 공지사항 데이터를 관리합니다.
   - 필드: 제목, 내용, 조회수, 상단 고정 여부, 게시 여부 등

3. **`User` (관리자 계정)**
   - `/ecms` 관리자 시스템에 로그인할 수 있는 관리자 유저 정보입니다.

## 4. 보안 및 인증 (Authentication & Middleware)
- **Custom Auth**: `bcryptjs` (비밀번호 단방향 암호화)와 `jose` (JWT 토큰 발급 및 검증) 도구를 결합하여 자체적인 인증 시스템을 구축했습니다.
- **라우트 보호 (`src/middleware.ts`)**: Next.js Middleware를 적용하여 `/ecms`(관리자 페이지) 및 `/api/ecms`(관리자 전용 API) 경로를 보호 중입니다. 로그인 토큰이 없는 비인가 접근 시 안전하게 로그인 페이지로 리다이렉트하거나 401 에러를 반환합니다.

## 5. 인프라 및 실행 환경
- **로컬 DB (`docker-compose.yml`)**: MySQL 8.0을 Docker 컨테이너로 띄워 로컬 개발 환경의 데이터베이스(`shinwon_db`)로 사용하도록 설정되어 있습니다.
- **스크립트**:
  - `npm run dev`: 로컬 개발 서버(통상 localhost:3000)를 실행합니다.
  - `npm run prisma:dev`: `.env.development` 환경 변수를 로드하여 안전하게 DB 마이그레이션을 진행하는 커스텀 스크립트가 세팅되어 있습니다.

---

**💡 총평**  
이 프로젝트는 **"신원"**의 공식 퍼블릭 홈페이지와 이를 자체적으로 일원화하여 관리할 수 있는 **백오피스(ECMS) 시스템**이 하나로 결합된 풀스택 Next.js 웹 애플리케이션입니다. 모던한 최신 기술 스택(Next 15, React 19, Prisma)을 활용하여 견고하게 설계되었습니다.
