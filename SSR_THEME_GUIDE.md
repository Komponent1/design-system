# SSR 환경에서 ThemeProvider 사용 가이드

## 문제 원인

SSR 환경에서 다크 모드를 사용할 때 hydration 오류가 발생하는 이유:

1. **서버 렌더링**: 서버에서는 `localStorage`나 `window.matchMedia`에 접근할 수 없어 기본값(light)으로 렌더링
2. **클라이언트 hydration**: 클라이언트가 마운트되면 실제 사용자의 테마 설정(dark)을 감지
3. **불일치 발생**: 서버 HTML(light)과 클라이언트 첫 렌더링(dark)이 달라서 hydration mismatch 발생

## 해결 방법

ThemeProvider는 SSR hydration 문제를 해결하기 위해 다음과 같이 동작합니다:

1. **서버와 클라이언트 모두 light 테마로 시작** (초기 렌더링 일치)
2. **블로킹 스크립트가 페이지 로드 전에 테마 적용** (깜빡임 방지)
3. **클라이언트 hydration 후 실제 테마로 전환** (suppressHydrationWarning으로 경고 억제)

### 1. 블로킹 스크립트 사용 (필수)

**페이지가 로드되기 전에** 테마를 설정하여 FOUC(Flash of Unstyled Content)를 방지합니다.
이 스크립트는 반드시 `<head>` 내부, 다른 스크립트보다 먼저 실행되어야 합니다.

#### Next.js App Router 예시

```tsx
// app/layout.tsx
import { ThemeProvider, themeInitScript } from '@your-package/design-system';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
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
      <Html lang='ko' suppressHydrationWarning>
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
    <html lang='ko' suppressHydrationWarning>
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

### 2. suppressHydrationWarning 적용 (필수)

ThemeProvider 내부에서 이미 `suppressHydrationWarning`을 적용했지만, **반드시 `<html>` 태그에도 적용**해야 합니다.

```tsx
<html suppressHydrationWarning>
```

이렇게 하면 서버 렌더링(light)과 클라이언트 첫 렌더링(실제 테마) 간의 불일치 경고가 억제됩니다.

### 3. CSS Variables 활용 (자동 적용됨)

ThemeProvider와 themeInitScript는 자동으로 CSS 변수를 설정합니다:

```
--theme-bg: 배경색
--theme-text: 텍스트 색상
```

필요하면 추가 CSS 변수를 사용할 수 있습니다:

```css
/* globals.css */
:root[data-theme='light'] {
  --custom-color: #ffffff;
}

:root[data-theme='dark'] {
  --custom-color: #121212;
}
```

## 주요 변경사항 (v2.0)

1. **Hydration 안전 초기화**: 서버와 클라이언트 모두 light로 시작하여 hydration mismatch 방지
2. **블로킹 스크립트**: HTML 로드 전 테마 적용으로 깜빡임(FOUC) 방지
3. **suppressHydrationWarning**: ThemeProvider와 html 태그에 적용하여 경고 억제
4. **localStorage 사용**: 사용자의 테마 선호도 저장 및 복원
5. **자동 CSS 변수 설정**: `--theme-bg`, `--theme-text` 자동 적용
6. **시스템 설정 대응**: 사용자 설정이 없을 때만 시스템 테마 따르기

## 동작 순서

1. **서버 렌더링**: light 테마로 HTML 생성
2. **브라우저 로드**: `themeInitScript`가 실행되어 즉시 실제 테마 적용 (localStorage/시스템 설정)
3. **React 마운트**: light로 hydration 완료 (경고 없음)
4. **useEffect 실행**: 실제 테마 감지 및 적용 (이미 스크립트가 DOM 업데이트 완료)
5. **사용자에게는**: 처음부터 올바른 테마로 보임 (깜빡임 없음)

## 테마 제어 예시

```tsx
import { useTheme } from '@your-package/design-system';

function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
```

## 트러블슈팅

### 1. 여전히 Hydration 경고가 발생하는 경우

**원인**: `<html>` 태그에 `suppressHydrationWarning`을 추가하지 않음

**해결**:

```tsx
<html lang="ko" suppressHydrationWarning>
```

### 2. 여전히 깨빡임(FOUC)이 발생하는 경우

**원인**: `themeInitScript`가 `<head>` 안에 없거나 늦게 실행됨

**해결**:

- `themeInitScript`를 `<head>` 내부, 다른 모든 스크립트보다 **먼저** 추가
- CSP(Content Security Policy) 설정 확인 (inline script 허용 필요)

```tsx
// ✅ 올바른 위치
<head>
  <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
  <meta ... />
  <link ... />
</head>

// ❌ 잘못된 위치
<body>
  <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
</body>
```

### 3. localStorage 접근 오류

**원인**: incognito 모드, 쿠키 차단, 또는 보안 정책

**해결**: 이미 `try-catch`로 처리되어 있으며, 실패 시 시스템 설정 또는 light 모드로 fallback

### 4. 특정 컴포넌트에서만 경고가 발생하는 경우

**원인**: 해당 컴포넌트가 테마 색상을 직접 인라인 스타일로 사용

**해결**: 해당 컴포넌트의 wrapper에 `suppressHydrationWarning` 추가

```tsx
<div suppressHydrationWarning>
  <Sidebar ... />
</div>
```

## 성능 고려사항

- 블로킹 스크립트는 매우 가볍고 빠르게 실행됨 (< 1ms)
- localStorage 읽기/쓰기는 비동기가 아니지만 충분히 빠름
- 테마 전환 시 리렌더링은 React Context를 통해 필요한 컴포넌트만 업데이트
