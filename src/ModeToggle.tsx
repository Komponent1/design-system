import { useTheme } from '../lib/theme/ThemeProvider';
import { Button, Navbar } from '../lib';

const ModeToggle: React.FC = () => {
  const { mode, setMode, isSystem, setIsSystem } = useTheme();

  return (
    <Navbar type='fixed'>
      <Button
        content={mode === 'dark' ? '🌙 다크 모드' : '☀️ 라이트 모드'}
        onClick={() => {
          setIsSystem(false);
          setMode(mode === 'dark' ? 'light' : 'dark');
        }}
        variant='outline'
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <input type='checkbox' checked={isSystem} onChange={(e) => setIsSystem(e.target.checked)} />
        시스템 모드
      </label>
    </Navbar>
  );
};

export default ModeToggle;
