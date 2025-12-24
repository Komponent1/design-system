import { useState } from 'react';
import { FloatButton, FloatButtonItem } from '../lib';

function App() {
  const [showSimple, setShowSimple] = useState(true);
  const [showWithChildren, setShowWithChildren] = useState(true);
  const [showMultiPosition, setShowMultiPosition] = useState(true);
  const [showAllPositionsWithChildren, setShowAllPositionsWithChildren] = useState(false);

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    marginRight: '8px',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', minHeight: '100vh' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: '24px' }}>
        <h2>FloatButton Examples</h2>

        <div style={{ marginBottom: '48px' }}>
          <h3>Basic FloatButton</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Simple floating action button at bottom-right corner
          </p>
          <button
            onClick={() => setShowSimple(!showSimple)}
            style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
          >
            {showSimple ? 'Hide' : 'Show'} Simple Button
          </button>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            👉 Check the bottom-right corner
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>FloatButton with Children (Speed Dial)</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Click the button to expand action options
          </p>
          <button
            onClick={() => setShowWithChildren(!showWithChildren)}
            style={{ ...buttonStyle, backgroundColor: '#10b981' }}
          >
            {showWithChildren ? 'Hide' : 'Show'} Speed Dial Button
          </button>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            👉 Click the floating button to see child buttons
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Different Positions</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            FloatButtons can be positioned at any corner
          </p>
          <button
            onClick={() => setShowMultiPosition(!showMultiPosition)}
            style={{ ...buttonStyle, backgroundColor: '#f59e0b' }}
          >
            {showMultiPosition ? 'Hide' : 'Show'} Multi-Position Buttons
          </button>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            👉 Check all four corners
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>All Positions with Children (Center Aligned)</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Test children alignment at all four corner positions
          </p>
          <button
            onClick={() => setShowAllPositionsWithChildren(!showAllPositionsWithChildren)}
            style={{ ...buttonStyle, backgroundColor: '#8b5cf6' }}
          >
            {showAllPositionsWithChildren ? 'Hide' : 'Show'} All Positions with Children
          </button>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            👉 Click each button to see center-aligned children
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>FloatButton Features</h3>
          <ul style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>
            <li>✅ Fixed positioning at any corner (top/bottom, left/right)</li>
            <li>✅ Three sizes: sm (40px), md (56px), lg (72px)</li>
            <li>✅ Customizable colors (background, icon)</li>
            <li>✅ Speed dial mode with child buttons</li>
            <li>✅ Smooth animations (rotate, scale, opacity)</li>
            <li>✅ Sequential reveal animation for children</li>
          </ul>
        </div>

        <div
          style={{
            padding: '24px',
            backgroundColor: '#fef3c7',
            borderRadius: '8px',
            border: '1px solid #fbbf24',
            marginBottom: '48px',
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', color: '#92400e' }}>💡 Usage Tips</h4>
          <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#78350f', fontSize: '14px' }}>
            <li>Use simple buttons for single primary actions (compose, add, etc.)</li>
            <li>Use speed dial (with children) for multiple related actions</li>
            <li>The main button rotates 45° when opened to indicate "close" action</li>
            <li>Child buttons appear above/below the main button based on position</li>
          </ul>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Position Type: Absolute vs Fixed</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Absolute positioning allows the button to scroll with the page content
          </p>
          <div
            style={{
              position: 'relative',
              height: '400px',
              border: '2px dashed #d1d5db',
              borderRadius: '8px',
              padding: '20px',
              overflow: 'auto',
              backgroundColor: '#f9fafb',
            }}
          >
            <div style={{ height: '800px', paddingTop: '20px' }}>
              <p style={{ marginBottom: '16px', color: '#374151' }}>
                📜 <strong>Scroll this container</strong> to see the absolute positioned button move
                with content
              </p>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                The button with <code>positionType="absolute"</code> is positioned relative to this
                container and scrolls with the content, unlike fixed buttons that stay in the
                viewport.
              </p>
              <FloatButton
                positionType='absolute'
                icon='📍'
                position='bottom-right'
                backgroundColor='#ef4444'
                size='md'
              >
                <FloatButtonItem onClick={() => alert('Absolute Action 1')}>📝</FloatButtonItem>
                <FloatButtonItem onClick={() => alert('Absolute Action 2')}>💾</FloatButtonItem>
                <FloatButtonItem onClick={() => alert('Absolute Action 3')}>🔄</FloatButtonItem>
              </FloatButton>
            </div>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            💡 Tip: Use <code>positionType="absolute"</code> when you want the button to be
            positioned relative to a specific container, or <code>positionType="fixed"</code>{' '}
            (default) to keep it fixed in the viewport.
          </p>
        </div>
      </section>

      {/* Simple FloatButton */}
      {showSimple && (
        <FloatButton
          icon='+'
          onClick={() => alert('Simple button clicked!')}
          position='bottom-right'
          backgroundColor='#3b82f6'
        />
      )}

      {/* Speed Dial FloatButton */}
      {showWithChildren && (
        <FloatButton icon='☰' position='bottom-left' backgroundColor='#10b981' size='md'>
          <FloatButtonItem onClick={() => alert('Edit action')}>✏️</FloatButtonItem>
          <FloatButtonItem onClick={() => alert('Share action')}>🔗</FloatButtonItem>
          <FloatButtonItem onClick={() => alert('Delete action')}>🗑️</FloatButtonItem>
        </FloatButton>
      )}

      {/* Multi-Position FloatButtons */}
      {showMultiPosition && (
        <>
          <FloatButton
            icon='↗'
            onClick={() => alert('Top-right')}
            position='top-right'
            size='sm'
            backgroundColor='#f59e0b'
          />
          <FloatButton
            icon='↖'
            onClick={() => alert('Top-left')}
            position='top-left'
            size='sm'
            backgroundColor='#ec4899'
          />
          <FloatButton icon='↘' position='bottom-right' size='lg' backgroundColor='#8b5cf6'>
            <FloatButtonItem onClick={() => alert('Action 1')}>1</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Action 2')}>2</FloatButtonItem>
          </FloatButton>
        </>
      )}

      {/* All Positions with Children */}
      {showAllPositionsWithChildren && (
        <>
          {/* Top-Right with Children */}
          <FloatButton icon='↗️' position='top-right' backgroundColor='#3b82f6' size='md'>
            <FloatButtonItem onClick={() => alert('Top-Right Action 1')}>📌</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Top-Right Action 2')}>⭐</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Top-Right Action 3')}>❤️</FloatButtonItem>
          </FloatButton>

          {/* Top-Left with Children */}
          <FloatButton icon='↖️' position='top-left' backgroundColor='#10b981' size='md'>
            <FloatButtonItem onClick={() => alert('Top-Left Action 1')}>🏠</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Top-Left Action 2')}>👤</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Top-Left Action 3')}>⚙️</FloatButtonItem>
          </FloatButton>

          {/* Bottom-Right with Children */}
          <FloatButton icon='↘️' position='bottom-right' backgroundColor='#f59e0b' size='md'>
            <FloatButtonItem onClick={() => alert('Bottom-Right Action 1')}>💬</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Bottom-Right Action 2')}>📷</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Bottom-Right Action 3')}>📎</FloatButtonItem>
          </FloatButton>

          {/* Bottom-Left with Children */}
          <FloatButton icon='↙️' position='bottom-left' backgroundColor='#ec4899' size='md'>
            <FloatButtonItem onClick={() => alert('Bottom-Left Action 1')}>✉️</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Bottom-Left Action 2')}>🔔</FloatButtonItem>
            <FloatButtonItem onClick={() => alert('Bottom-Left Action 3')}>🔍</FloatButtonItem>
          </FloatButton>
        </>
      )}
    </div>
  );
}

export default App;
