import { useTheme } from '../lib/theme/ThemeProvider';
import { Button, Navbar } from '../lib';
import type { CustomTheme } from './App';

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useTheme<CustomTheme>();

  return (
    <Navbar type='fixed'>
      <Button
        content={mode === 'dark' ? '🌙 다크 모드' : '☀️ 라이트 모드'}
        onClick={() => {
          setMode(mode === 'dark' ? 'light' : 'dark');
        }}
        variant='outline'
      />
    </Navbar>
  );
};

export default ModeToggle;
