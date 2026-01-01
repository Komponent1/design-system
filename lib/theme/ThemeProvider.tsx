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

// SSR-safe theme detection
const THEME_STORAGE_KEY = 'theme-mode';
const THEME_SYSTEM_KEY = 'theme-system';

// theme 객체 통합
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

export type ThemeContextType = {
  theme: Theme;
  mode: 'light' | 'dark';
  setMode: (m: 'light' | 'dark') => void;
  isSystem: boolean;
  setIsSystem: (b: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  mode: 'light',
  setMode: () => {},
  isSystem: true,
  setIsSystem: () => {},
});
// SSR-safe initial mode detection
const getInitialMode = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const getInitialIsSystem = (): boolean => {
  if (typeof window === 'undefined') return true;

  try {
    const stored = localStorage.getItem(THEME_SYSTEM_KEY);
    return stored === null || stored === 'true';
  } catch {
    return true;
  }
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, customTheme }) => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);
  const [isSystem, setIsSystem] = useState(getInitialIsSystem);

  useEffect(() => {
    document.body.style.margin = '0';
    setMounted(true);
    return () => {
      document.body.style.margin = '';
    };
  }, []);

  // Save mode to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // ignore localStorage errors
    }
  }, [mode, mounted]);

  // Save isSystem to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(THEME_SYSTEM_KEY, String(isSystem));
    } catch {
      // ignore localStorage errors
    }
  }, [isSystem, mounted]);

  // Listen to system theme changes
  useEffect(() => {
    if (!mounted || !isSystem) return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');

    // Set initial mode based on system preference
    setMode(mq.matches ? 'dark' : 'light');

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [isSystem, mounted]);

  // Effective mode calculation
  const effectiveMode = mode;

  // customTheme 병합
  const baseTheme = effectiveMode === 'dark' ? darkTheme : lightTheme;
  const theme = customTheme
    ? ({
        ...baseTheme,
        ...customTheme,
      } as Theme)
    : baseTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode: effectiveMode, setMode, isSystem, setIsSystem }}>
      <div
        suppressHydrationWarning
        style={{
          backgroundColor: theme.color.background.default,
          color: theme.color.text.primary,
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
 * SSR 환경에서 FOUC(Flash of Unstyled Content) 방지를 위한 블로킹 스크립트
 * HTML의 <head> 태그 안에 다음 스크립트를 추가하세요:
 *
 * @example
 * ```html
 * <head>
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 * </head>
 * ```
 */
export const themeInitScript = `
(function() {
  try {
    var THEME_STORAGE_KEY = 'theme-mode';
    var THEME_SYSTEM_KEY = 'theme-system';
    
    var storedMode = localStorage.getItem(THEME_STORAGE_KEY);
    var storedSystem = localStorage.getItem(THEME_SYSTEM_KEY);
    var isSystem = storedSystem === null || storedSystem === 'true';
    
    var mode = 'light';
    if (storedMode === 'light' || storedMode === 'dark') {
      mode = storedMode;
    } else if (isSystem && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      mode = 'dark';
    }
    
    // data attribute로 테마 설정 (CSS에서 사용 가능)
    document.documentElement.setAttribute('data-theme', mode);
    
    // Optional: 즉시 배경색 적용으로 깜빡임 방지
    if (mode === 'dark') {
      document.documentElement.style.backgroundColor = '#121212';
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.backgroundColor = '#ffffff';
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {
    // localStorage 접근 실패 시 무시
  }
})();
`;
