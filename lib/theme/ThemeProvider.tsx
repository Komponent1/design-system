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
export type ThemeProviderProps = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, customTheme }) => {
  useEffect(() => {
    document.body.style.margin = '0';
    return () => {
      document.body.style.margin = '';
    };
  }, []);
  // 시스템 모드 감지
  const getSystemMode = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };
  const [mode, setMode] = useState<'light' | 'dark'>(getSystemMode());
  const [isSystem, setIsSystem] = useState(true);

  useEffect(() => {
    if (!isSystem) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [isSystem]);

  // isSystem이 true면 시스템 모드, false면 수동 모드
  const effectiveMode = isSystem ? getSystemMode() : mode;

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
