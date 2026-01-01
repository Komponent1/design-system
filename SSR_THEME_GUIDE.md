# SSR 환경에서 ThemeProvider 사용 가이드

## 문제 원인

SSR 환경에서 다크 모드를 사용할 때 hydration 오류가 발생하는 이유:

1. **서버 렌더링**: 서버에서는 `localStorage`나 `window.matchMedia`에 접근할 수 없어 기본값(light)으로 렌더링
2. **클라이언트 hydration**: 클라이언트가 마운트되면 실제 사용자의 테마 설정(dark)을 감지
3. **불일치 발생**: 서버 HTML(light)과 클라이언트 첫 렌더링(dark)이 달라서 hydration mismatch 발생

## 해결 방법

### 1. 블로킹 스크립트 사용 (권장)

페이지가 로드되기 전에 테마를 설정하여 FOUC(Flash of Unstyled Content)를 방지합니다.

#### Next.js App Router 예시

```tsx
// app/layout.tsx
import { ThemeProvider, themeInitScript } from '@your-package/design-system';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

#### Next.js Pages Router 예시

```tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { themeInitScript } from '@your-package/design-system';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko" suppressHydrationWarning>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// pages/_app.tsx
import { ThemeProvider } from '@your-package/design-system';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

#### Remix 예시

```tsx
// app/root.tsx
import { ThemeProvider, themeInitScript } from '@your-package/design-system';

export default function App() {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
```

### 2. suppressHydrationWarning 적용

ThemeProvider 내부에서 이미 `suppressHydrationWarning`을 적용했지만, 추가로 `<html>` 태그에도 적용하는 것을 권장합니다.

```tsx
<html suppressHydrationWarning>
```

### 3. CSS Variables 활용 (선택사항)

CSS 변수를 사용하면 더 부드러운 테마 전환이 가능합니다:

```css
/* globals.css */
:root[data-theme='light'] {
  --bg-default: #ffffff;
  --text-primary: #000000;
}

:root[data-theme='dark'] {
  --bg-default: #121212;
  --text-primary: #ffffff;
}

body {
  background-color: var(--bg-default);
  color: var(--text-primary);
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

## 주요 변경사항

1. **localStorage 사용**: 사용자의 테마 선호도를 저장하고 복원
2. **SSR-safe 초기화**: `typeof window === 'undefined'` 체크로 서버 환경 대응
3. **블로킹 스크립트**: HTML 로드 전 테마 적용으로 깜빡임 방지
4. **suppressHydrationWarning**: hydration 불일치 경고 억제
5. **mounted 상태 관리**: 클라이언트 마운트 후에만 localStorage 작업 수행

## 테마 제어 예시

```tsx
import { useTheme } from '@your-package/design-system';

function ThemeToggle() {
  const { mode, setMode, isSystem, setIsSystem } = useTheme();

  return (
    <div>
      {/* 수동 토글 */}
      <button onClick={() => {
        setIsSystem(false);
        setMode(mode === 'light' ? 'dark' : 'light');
      }}>
        {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* 시스템 설정 따르기 */}
      <button onClick={() => setIsSystem(true)}>
        🖥️ System
      </button>
    </div>
  );
}
```

## 트러블슈팅

### 1. 여전히 깜빡임이 발생하는 경우

- `themeInitScript`가 `<head>` 안에 있는지 확인
- 다른 스크립트보다 먼저 실행되는지 확인
- CSP(Content Security Policy)에서 inline script를 허용하는지 확인

### 2. localStorage 접근 오류

- `try-catch`로 이미 처리되어 있지만, incognito 모드나 쿠키 차단 환경 고려
- 이 경우 기본 light 모드로 동작

### 3. Hydration 경고가 계속 나오는 경우

- `<html>` 태그에 `suppressHydrationWarning` 추가
- 테마에 영향받는 모든 최상위 요소에 `suppressHydrationWarning` 적용

## 성능 고려사항

- 블로킹 스크립트는 매우 가볍고 빠르게 실행됨 (< 1ms)
- localStorage 읽기/쓰기는 비동기가 아니지만 충분히 빠름
- 테마 전환 시 리렌더링은 React Context를 통해 필요한 컴포넌트만 업데이트
