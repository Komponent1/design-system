import { createColorTokens } from './color';
import { createAlertTokens } from './components/alert';
import { createButtonTokens } from './components/button';
import { createCheckboxTokens } from './components/checkbox';
import { createDividerTokens } from './components/divider';
import { createInputTokens } from './components/input';
import { createListTokens } from './components/list';
import { createRadioTokens } from './components/radio';
import { createSkeletonTokens } from './components/sekelton';
import { createSnackbarTokens } from './components/snackbar';
import { createTableTokens } from './components/table';
import { createTooltipTokens } from './components/tooltip';
import type { Theme } from './ThemeProvider';
import type { DeepPartial } from './utils';

export const createTheme = <T>(
  baseMode: 'light' | 'dark',
  customTokens?: DeepPartial<Theme<T>>,
) => {
  const color = createColorTokens(baseMode, customTokens?.color);
  return {
    color,
    button: createButtonTokens(color, customTokens?.button),
    alert: createAlertTokens(color, customTokens?.alert),
    checkbox: createCheckboxTokens(color, customTokens?.checkbox),
    divider: createDividerTokens(color, customTokens?.divider),
    input: createInputTokens(color, customTokens?.input),
    radio: createRadioTokens(color, customTokens?.radio),
    skeleton: createSkeletonTokens(color, customTokens?.skeleton),
    snackbar: createSnackbarTokens(color, customTokens?.snackbar),
    table: createTableTokens(color, customTokens?.table),
    tooltip: createTooltipTokens(color, customTokens?.tooltip),
    list: createListTokens(color, customTokens?.list),
  } as Theme<T>;
};
