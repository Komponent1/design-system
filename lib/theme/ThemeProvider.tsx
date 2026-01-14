/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { type ColorType } from './color';
import { type ButtonTokens } from './components/button';
import { type AlertTokens } from './components/alert';
import { type CheckboxTokens } from './components/checkbox';
import { type DividerTokens } from './components/divider';
import { type InputTokens } from './components/input';
import { type RadioTokens } from './components/radio';
import { type SkeletonTokens } from './components/sekelton';
import { type SnackbarTokens } from './components/snackbar';
import { type TableTokens } from './components/table';
import { type TooltipTokens } from './components/tooltip';
import { type ListTokens } from './components/list';
import { createTheme } from './token';
import type { DeepPartial } from './utils';

const THEME_STORAGE_KEY = 'theme-mode';

// 기본 Theme 타입
export type BaseTheme = {
  color: ColorType;
  button: ButtonTokens;
  alert: AlertTokens;
  checkbox: CheckboxTokens;
  divider: DividerTokens;
  input: InputTokens;
  radio: RadioTokens;
  skeleton: SkeletonTokens;
  snackbar: SnackbarTokens;
  table: TableTokens;
  tooltip: TooltipTokens;
  list: ListTokens;
};

// 확장 가능한 Theme 타입 (인덱스 시그니처 추가)
export type Theme<T = unknown> = BaseTheme & T;

// 테마 객체
const lightTheme: BaseTheme = createTheme('light');
const darkTheme: BaseTheme = createTheme('dark');

// Context 타입 및 Context 생성
export type ThemeContextType<T = unknown> = {
  theme: Theme<T>;
  mode: 'light' | 'dark';
  setMode: (m: 'light' | 'dark') => void;
};

// SSR과 CSR 모두 같은 초기값으로 시작 (hydration mismatch 방지)
// themeInitScript가 설정한 data-theme을 읽어 초기값 결정
const getInitialMode = (): 'light' | 'dark' => {
  // SSR: 항상 light로 시작 (서버는 사용자 설정을 알 수 없음)
  if (typeof window === 'undefined') return 'light';

  // CSR: data-theme attribute에서 읽기 (themeInitScript가 설정한 값)
  const htmlTheme = document.documentElement.getAttribute('data-theme');
  if (htmlTheme === 'dark') return 'dark';
  if (htmlTheme === 'light') return 'light';

  // fallback: localStorage 확인
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // ignore localStorage errors
  }

  // fallback: 시스템 설정 확인
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// 항상 light로 초기화 (SSR과 CSR 일치)
const initialMode: 'light' | 'dark' = 'light';

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme, // 항상 light로 시작
  mode: initialMode,
  setMode: () => {},
});

export type ThemeProviderProps<T = unknown> = {
  children: React.ReactNode;
  customTheme?: DeepPartial<Theme<T>>;
};

export const ThemeProvider = <T extends Record<string, unknown>>({
  children,
  customTheme,
}: ThemeProviderProps<T>) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  // 클라이언트에서 실제 테마 감지 및 적용
  useEffect(() => {
    // hydration이 완료된 후 실제 테마를 감지하여 적용
    const actualMode = getInitialMode();
    setMode(actualMode);
    setIsMounted(true);
  }, []);

  // 시스템 테마 변경을 즉시 반영
  useEffect(() => {
    if (!isMounted) return;
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // localStorage에 저장된 값이 있으면 시스템 설정 무시
      try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored) return;
      } catch {
        // ignore
      }
      setMode(e.matches ? 'dark' : 'light');
    };

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange);
      return () => mql.removeEventListener('change', handleChange);
    }

    // Safari < 14 호환
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, [isMounted]);

  // 테마 변경 시 localStorage 저장
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // ignore localStorage errors
    }
  }, [mode, isMounted]);

  // SSR: window가 없어 라이트로 초기화될 수 있으나, CSR 시 matchMedia/localStorage/data-theme로 보정
  const currentMode = mode;
  const baseTheme = currentMode === 'dark' ? darkTheme : lightTheme;
  const theme = customTheme ? createTheme(currentMode, customTheme) : (baseTheme as Theme<T>);

  // 문서 루트에 data-theme 및 주요 CSS 변수 동기화
  useEffect(() => {
    if (!isMounted) return;
    if (typeof document === 'undefined') return;
    try {
      document.documentElement.setAttribute('data-theme', currentMode);
      document.documentElement.style.colorScheme = currentMode;
      document.documentElement.style.setProperty('--theme-bg', theme.color.background.default);
      document.documentElement.style.setProperty('--theme-text', theme.color.text.primary);
      document.documentElement.style.backgroundColor = theme.color.background.default;
      document.documentElement.style.color = theme.color.text.primary;
    } catch {
      // ignore DOM update errors
    }
  }, [currentMode, isMounted, theme.color.background.default, theme.color.text.primary]);

  return (
    <ThemeContext.Provider value={{ theme, mode: currentMode, setMode }}>
      <div
        suppressHydrationWarning
        data-theme={currentMode}
        style={{
          backgroundColor: 'var(--theme-bg, ' + theme.color.background.default + ')',
          color: 'var(--theme-text, ' + theme.color.text.primary + ')',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = <T = unknown,>() => useContext(ThemeContext) as ThemeContextType<T>;

/**
 * SSR 환경에서 Hydration 오류와 FOUC 방지를 위한 블로킹 스크립트
 * HTML의 <head> 태그에 추가하세요
 *
 * @example
 * ```tsx
 * <head>
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 * </head>
 * ```
 */
export const themeInitScript = `
(function() {
  var mode = 'light';
  
  try {
    // localStorage에서 저장된 테마 확인
    var stored = localStorage.getItem('theme-mode');
    if (stored === 'dark' || stored === 'light') {
      mode = stored;
    } else {
      // localStorage가 없으면 시스템 다크모드 설정 확인
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        mode = 'dark';
      }
    }
  } catch (e) {
    // localStorage 접근 불가 시 시스템 설정 사용
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      mode = 'dark';
    }
  }
  
  // data-theme attribute로 모드 저장
  document.documentElement.setAttribute('data-theme', mode);
  
  // CSS 변수 및 배경색 설정 (FOUC 방지)
  var isDark = mode === 'dark';
  var bgColor = isDark ? '#020617' : '#FFFFFF';
  var textColor = isDark ? '#F9FAFB' : '#111827';
  
  document.documentElement.style.setProperty('--theme-bg', bgColor);
  document.documentElement.style.setProperty('--theme-text', textColor);
  document.documentElement.style.backgroundColor = bgColor;
  document.documentElement.style.color = textColor;
  document.documentElement.style.colorScheme = mode;
})();
`;
