/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { colorPalette as color, type ColorType } from './color';
import { createButtonTokens } from './components/button';
import { createAlertTokens } from './components/alert';
import { createCheckboxTokens } from './components/checkbox';
import { createDividerTokens } from './components/divider';
import { createInputTokens } from './components/input';
import { createRadioTokens } from './components/radio';
import { createSkeletonTokens } from './components/sekelton';
import { createSnackbarTokens } from './components/snackbar';
import { createTableTokens } from './components/table';
import { createTooltipTokens } from './components/tooltip';

const THEME_STORAGE_KEY = 'theme-mode';

// Theme 타입
export type Theme = {
  color: ColorType;
  button: ReturnType<typeof createButtonTokens>;
  alert: ReturnType<typeof createAlertTokens>;
  checkbox: ReturnType<typeof createCheckboxTokens>;
  divider: ReturnType<typeof createDividerTokens>;
  input: ReturnType<typeof createInputTokens>;
  radio: ReturnType<typeof createRadioTokens>;
  skeleton: ReturnType<typeof createSkeletonTokens>;
  snackbar: ReturnType<typeof createSnackbarTokens>;
  table: ReturnType<typeof createTableTokens>;
  tooltip: ReturnType<typeof createTooltipTokens>;
};

// 테마 객체
const lightTheme: Theme = {
  color: color.light,
  button: createButtonTokens(color.light),
  alert: createAlertTokens(color.light),
  checkbox: createCheckboxTokens(color.light),
  divider: createDividerTokens(color.light),
  input: createInputTokens(color.light),
  radio: createRadioTokens(color.light),
  skeleton: createSkeletonTokens(color.light),
  snackbar: createSnackbarTokens(color.light),
  table: createTableTokens(color.light),
  tooltip: createTooltipTokens(color.light),
};

const darkTheme: Theme = {
  color: color.dark,
  button: createButtonTokens(color.dark),
  alert: createAlertTokens(color.dark),
  checkbox: createCheckboxTokens(color.dark),
  divider: createDividerTokens(color.dark),
  input: createInputTokens(color.dark),
  radio: createRadioTokens(color.dark),
  skeleton: createSkeletonTokens(color.dark),
  snackbar: createSnackbarTokens(color.dark),
  table: createTableTokens(color.dark),
  tooltip: createTooltipTokens(color.dark),
};

// Context 타입 및 Context 생성
export type ThemeContextType = {
  theme: Theme;
  mode: 'light' | 'dark';
  setMode: (m: 'light' | 'dark') => void;
};

// 블로킹 스크립트가 설정한 data-theme을 읽어 초기값 결정
const getInitialMode = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  const htmlTheme = document.documentElement.getAttribute('data-theme');
  return htmlTheme === 'dark' ? 'dark' : 'light';
};

const initialMode = getInitialMode();

const ThemeContext = createContext<ThemeContextType>({
  theme: initialMode === 'dark' ? darkTheme : lightTheme,
  mode: initialMode,
  setMode: () => {},
});

export type ThemeProviderProps = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, customTheme }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  // 테마 변경 시 localStorage 저장
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // ignore localStorage errors
    }
  }, [mode]);

  const baseTheme = mode === 'dark' ? darkTheme : lightTheme;
  const theme = customTheme ? ({ ...baseTheme, ...customTheme } as Theme) : baseTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      <div
        suppressHydrationWarning
        data-theme={mode}
        style={{
          backgroundColor: 'var(--theme-bg, ' + theme.color.background.default + ')',
          color: 'var(--theme-text, ' + theme.color.text.primary + ')',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

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
  
  // 시스템 다크모드 설정 확인
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    mode = 'dark';
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
