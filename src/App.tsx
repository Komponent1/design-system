import { List } from '../lib';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
        <h2>List Examples</h2>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3>Variant: none (선택 가능)</h3>
            <List variant='none' selected selectedIndex={0}>
              <div>Home</div>
              <div>Products</div>
              <div>About</div>
              <div>Contact</div>
            </List>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3>Variant: underline (선택 가능)</h3>
            <List variant='underline' selected selectedIndex={1}>
              <div>Dashboard</div>
              <div>Analytics</div>
              <div>Reports</div>
              <div>Settings</div>
            </List>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3>Variant: none (선택 불가, hover 없음)</h3>
            <List variant='none'>
              <div>Read-only Item 1</div>
              <div>Read-only Item 2</div>
              <div>Read-only Item 3</div>
            </List>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3>Variant: underline (선택 불가)</h3>
            <List variant='underline'>
              <div>Static Item A</div>
              <div>Static Item B</div>
              <div>Static Item C</div>
              <div>Static Item D</div>
            </List>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
