import type { createInputTokens } from '../theme/components/input';
import { typographyMap } from '../typography/typography.config';

// 스타일 생성 함수: theme.input 토큰을 받아서 반환
export const getBoxStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  ...typographyMap.lg,
  width: '100%',
  boxSizing: 'border-box' as const,
  outline: 'none',
  padding: '0.625rem 1rem',
  border: '1px solid',
  borderColor: inputToken.border.default,
  borderRadius: '0.5rem',
  backgroundColor: inputToken.bg.default,
  color: inputToken.text.default,
});
export const getUnderlinedStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  border: 'none',
  borderBottom: '1px solid',
  borderColor: inputToken.border.default,
  borderRadius: '0',
  backgroundColor: inputToken.bg.default,
  color: inputToken.text.default,
});
export const getGrayStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  border: 'none',
  backgroundColor: inputToken.bg.readonly,
  color: inputToken.text.readonly,
});
export const sizeStyles = {
  sm: { ...typographyMap.sm, padding: '0.625rem 0.75rem' },
  md: { ...typographyMap.md, padding: '0.75rem 1rem' },
  lg: { ...typographyMap.lg, padding: '0.875rem 1.25rem' },
};
export const getDisabledStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  backgroundColor: inputToken.bg.disabled,
  cursor: 'not-allowed',
  color: inputToken.text.disabled,
  borderColor: inputToken.border.disabled,
});
export const getHoverStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  borderColor: inputToken.border.focus,
});
export const getFocusedStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  borderColor: inputToken.border.focus,
});
export const getErrorStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  borderColor: inputToken.border.error,
  backgroundColor: inputToken.bg.error,
  color: inputToken.text.error,
});
export const getSuccessStyle = (inputToken: ReturnType<typeof createInputTokens>) => ({
  borderColor: inputToken.border.success,
  backgroundColor: inputToken.bg.success,
  color: inputToken.text.success,
});
export const searchButtonSizeStyle = {
  sm: { padding: '0.625rem 0.75rem' },
  md: { padding: '0.75rem 1rem' },
  lg: { padding: '0.875rem 1rem' },
};
export const searchButtonStyle = {
  background: 'none',
  border: '1px solid',
  borderLeft: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s ease',
};
export const buttonIconStyle = {
  sm: { w: 20, h: 20 },
  md: { w: 24, h: 24 },
  lg: { w: 21, h: 21 },
};
