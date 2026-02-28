# 📱 모바일 최적화 분석 및 가이드 (shinwonfi-homepage)

현재 프로젝트(`shinwonfi-homepage`)의 모바일 반응형(Responsive) 구현 상태를 분석하고, 최적화를 위해 수정해야 할 내용을 정리한 가이드입니다.

---

## 1. 현재 모바일 반응형 구현 상태

Tailwind CSS의 기본 Breakpoint(`sm`, `md`, `lg` 등)를 활용하여 기본적인 모바일 대응은 되어 있는 상태입니다. 

### ✅ 잘 구현된 부분
1. **네비게이션 바 (Header.tsx)**
   - 데스크톱용 메뉴(`lg:flex`)와 모바일용 햄버거 메뉴 및 풀스크린 메뉴가 분리되어 있습니다.
   - 모바일 메뉴 오픈 시 화면을 덮는 오버레이(Z-index: 150)와 스크롤 바 처리 등이 잘 구현되어 있습니다.
2. **그리드 및 레이아웃 (page.tsx)**
   - 메인 페이지의 주요 컨텐츠인 `Business Areas`와 `Our Strengths` 섹션이 `grid-cols-1 md:grid-cols-3`과 같이 모바일에서는 1단, 데스크톱에서는 다단으로 나타나도록 반응형 처리가 잘 되어 있습니다.
   - 여백(`gap`, `padding`) 또한 모바일과 데스크톱(`md:`) 간에 차이를 두어 적절히 배치하고 있습니다 (`gap-12 md:gap-8`).

---

## 2. 수정 및 최적화가 필요한 내용 (Actionable Items)

하지만 완벽한 모바일 최적화를 위해 **디테일한 뷰포트(Viewport) 제어와 터치(Interaction) 최적화**가 필요합니다.

### 🔴 1. 모바일 브라우저 뷰포트 및 스크롤 문제 방지
`src/app/globals.css` 파일에서 `overflow-x: hidden;`이 선언되어 있지만, iOS/안드로이드 브라우저의 모바일 100vh 스크롤 버그(주소창 등) 현상이나 터치 반응 속도를 최적화하는 CSS가 부족합니다.

**✅ 수정 사항 (globals.css 추가 제안)**
```css
/* src/app/globals.css */
@layer base {
  html, body {
    /* 모바일 브라우저 뷰포트 대응 및 터치 하이라이트 제거 */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
}
```

### 🔴 2. 모바일 터치 영역 (Touch Target Size) 확보
버튼, 링크 등 모바일 사용자가 손가락으로 터치하는 영역은 최소 `44px` ~ `48px` 높이/너비를 가지는 것이 애플(Apple)/구글(Google) 모바일 UI/UX 가이드라인입니다.

**✅ 수정 사항 (Header.tsx 및 page.tsx)**
- **Header 모바일 메뉴 버튼**: 
  현재 패딩이 있지만 명확한 min-height 속성이 추가되면 좋습니다.
  *(e.g., `min-h-[44px] min-w-[44px]`)*
- **메인 페이지 공지사항/문의 버튼**: 
  링크나 버튼 요소에 `@apply p-4` 이상을 주어 터치 영역을 늘려야 합니다.

### 🔴 3. 텍스트 가독성 및 폰트 사이즈 (Typography)
모바일 기기에서 텍스트가 너무 크거나 화면 밖으로 넘치는(Break-word) 현상이 발생할 수 있습니다. 메인 페이지(`page.tsx`) 내 영문 타이틀이나 긴 텍스트의 줄바꿈 제어가 필요합니다.

**✅ 수정 사항 (page.tsx 등)**
- 모바일에서 긴 단어가 잘리지 않도록 `break-keep`과 `break-words` 혼합 사용
- 모바일 타이틀 폰트 크기 미세 조정 (예: `text-4xl`이 너무 크다면 `text-3xl sm:text-4xl`로 조정)

### 🔴 4. 이미지 로딩 최적화 (LCP 개선)
모바일 환경에서는 데스크톱(광랜)에 비해 네트워크가 불안할 수 있습니다. 메인 슬라이더 부분에서 큰 해상도의 이미지 패치 최적화가 중요합니다.

**✅ 수정 사항 (page.tsx)**
- Next.js의 `next/image`를 이미 사용 중이나, 모바일용 이미지와 데스크톱용 이미지를 반응형(`sizes`) 옵션으로 더 세밀하게 쪼개거나 분리할 수 있습니다.
- Hero 섹션 첫 번째 이미지 이외에는 `priority` 속성을 제거하여 지연 로딩(Lazy loading)을 권장합니다.
- `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` 와 같이 Next/Image 태그에 사이즈 명시 보강

---

## 3. 적용 단계 요약 (로드맵)

1. **글로벌 터치/뷰포트 설정**: `globals.css` 및 `layout.tsx` (Viewport Meta) 최적화
2. **UI 터치 영역 (Touch target)**: Header 컴포넌트, Footer 링크, Main 버튼 크기 확장
3. **타이포그래피 및 레이아웃**: `sm:` (모바일 전용) 브레이크포인트 세밀화 작업
4. **이미지 로딩 최적화**: `next/image` 태그 내 `sizes` 최적화 및 `priority` 재배치
