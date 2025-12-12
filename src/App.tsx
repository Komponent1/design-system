import { Button } from '../lib';
import { Tooltip } from '../lib/tooltip/tooltip';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: 12 }}>
        <h2>Tooltip Examples</h2>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content='Top tooltip' position='top'>
            <Button onClick={() => {}} content={'Hover top'} />
          </Tooltip>

          <Tooltip content='Bottom tooltip' position='bottom'>
            <Button onClick={() => {}} content={'Hover bottom'} />
          </Tooltip>

          <Tooltip content='Left tooltip' position='left'>
            <Button onClick={() => {}} content={'Hover left'} />
          </Tooltip>

          <Tooltip content='Right tooltip' position='right'>
            <Button onClick={() => {}} content={'Hover right'} />
          </Tooltip>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Tooltip
            content={
              <span style={{ fontSize: 12 }}>
                Custom <strong>JSX</strong> tooltip
              </span>
            }
          >
            <span style={{ padding: 8, border: '1px dashed #ccc', borderRadius: 4 }}>
              Inline element
            </span>
          </Tooltip>

          <Tooltip
            content={'Long tooltip text that wraps to multiple lines to show behavior.'}
            position='top'
          >
            <span style={{ padding: 8, border: '1px solid #eee', borderRadius: 4 }}>Long text</span>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Tooltip Color / Background Examples</h2>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Tooltip
            position='top'
            backgroundColor={'#2b8a3e'}
            textColor={'#fff'}
            content={'Success'}
          >
            <Button onClick={() => {}} content={'Success'} />
          </Tooltip>

          <Tooltip
            position='top'
            backgroundColor={'#ffb703'}
            textColor={'#000'}
            content={'Warning'}
          >
            <Button onClick={() => {}} content={'Warning'} />
          </Tooltip>

          <Tooltip
            position='top'
            backgroundColor={'#ffffff'}
            textColor={'#222'}
            content={<span style={{ color: '#222' }}>Light background</span>}
          >
            <span style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}>Light bg</span>
          </Tooltip>

          <Tooltip position='right' backgroundColor={'#1e3a8a'} textColor={'#fff'} content={'Info'}>
            <Button onClick={() => {}} content={'Info (right)'} />
          </Tooltip>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Tall Targets: children가 세로로 긴 경우 (Top/Bottom/Left/Right)</h2>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Top (tall child)</strong>
            <Tooltip position='top' content={'Short tip'}>
              <div
                style={{
                  width: 120,
                  height: 140,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Tall target
              </div>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Bottom (tall child)</strong>
            <Tooltip position='bottom' content={'Short tip'}>
              <div
                style={{
                  width: 120,
                  height: 140,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Tall target
              </div>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Left (tall child)</strong>
            <Tooltip position='left' content={'Short tip'}>
              <div
                style={{
                  width: 120,
                  height: 140,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Tall target
              </div>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Right (tall child)</strong>
            <Tooltip position='right' content={'Short tip'}>
              <div
                style={{
                  width: 120,
                  height: 140,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Tall target
              </div>
            </Tooltip>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Edge Cases: Large target & Long content</h2>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong>Large target (wide block)</strong>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Tooltip content={'Top on large target'} position='top'>
                <div
                  style={{
                    width: 260,
                    height: 48,
                    background: '#fafafa',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Large target
                </div>
              </Tooltip>

              <Tooltip content={'Bottom on large target'} position='bottom'>
                <div
                  style={{
                    width: 260,
                    height: 48,
                    background: '#fafafa',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Large target
                </div>
              </Tooltip>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong>Long content (wrapping)</strong>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Tooltip
                content={
                  'This is a very long tooltip content example. It should wrap across multiple lines and remain readable even when long.'
                }
                position='top'
              >
                <Button onClick={() => {}} content={'Top long'} />
              </Tooltip>

              <Tooltip
                content={
                  'This is a very long tooltip content example. It should wrap across multiple lines and remain readable even when long.'
                }
                position='right'
              >
                <Button onClick={() => {}} content={'Right long'} />
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Vertical Long Content for Left/Right</h2>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Left (tall content)</strong>
            <Tooltip
              position='left'
              content={
                <div style={{ width: 160 }}>
                  <p style={{ margin: 0 }}>Line 1: important detail</p>
                  <p style={{ margin: 0 }}>Line 2: more information</p>
                  <p style={{ margin: 0 }}>Line 3: extra notes</p>
                  <p style={{ margin: 0 }}>Line 4: final remark</p>
                </div>
              }
            >
              <div
                style={{
                  width: 120,
                  height: 40,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Target
              </div>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <strong>Right (tall content)</strong>
            <Tooltip
              position='right'
              content={
                <div style={{ width: 160 }}>
                  <p style={{ margin: 0 }}>Item A</p>
                  <p style={{ margin: 0 }}>Item B</p>
                  <p style={{ margin: 0 }}>Item C</p>
                  <p style={{ margin: 0 }}>Item D</p>
                  <p style={{ margin: 0 }}>Item E</p>
                </div>
              }
            >
              <div
                style={{
                  width: 120,
                  height: 40,
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Target
              </div>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
