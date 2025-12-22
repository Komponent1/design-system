import { useState } from 'react';
import { Snackbar, ContextMenu } from '../lib';

function App() {
  const [showTopSnackbar, setShowTopSnackbar] = useState(false);
  const [showBottomSnackbar, setShowBottomSnackbar] = useState(false);
  const [showTopLeftSnackbar, setShowTopLeftSnackbar] = useState(false);
  const [showTopRightSnackbar, setShowTopRightSnackbar] = useState(false);
  const [showBottomLeftSnackbar, setShowBottomLeftSnackbar] = useState(false);
  const [showBottomRightSnackbar, setShowBottomRightSnackbar] = useState(false);
  const [showFadeSnackbar, setShowFadeSnackbar] = useState(false);
  const [showSlideSnackbar, setShowSlideSnackbar] = useState(false);
  const [showGrowSnackbar, setShowGrowSnackbar] = useState(false);
  const [showDraggableSnackbar, setShowDraggableSnackbar] = useState(false);
  const [showNormalSnackbar, setShowNormalSnackbar] = useState(false);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: '24px' }}>
        <h2>Snackbar Examples</h2>

        <div style={{ marginBottom: '48px' }}>
          <h3>Position Examples</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Click buttons to see snackbars at different positions
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowTopSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Top Center
            </button>
            <button
              onClick={() => setShowBottomSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Bottom Center
            </button>
            <button
              onClick={() => setShowTopLeftSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Top Left
            </button>
            <button
              onClick={() => setShowTopRightSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Top Right
            </button>
            <button
              onClick={() => setShowBottomLeftSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Bottom Left
            </button>
            <button
              onClick={() => setShowBottomRightSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#3b82f6' }}
            >
              Bottom Right
            </button>
          </div>

          {showTopSnackbar && (
            <Snackbar
              message='📍 Top center positioned snackbar'
              snackbarPosition='top'
              onClose={() => setShowTopSnackbar(false)}
              duration={3000}
            />
          )}
          {showBottomSnackbar && (
            <Snackbar
              message='📍 Bottom center positioned snackbar'
              snackbarPosition='bottom'
              onClose={() => setShowBottomSnackbar(false)}
              duration={3000}
            />
          )}
          {showTopLeftSnackbar && (
            <Snackbar
              message='📍 Top left corner'
              snackbarPosition='top-left'
              onClose={() => setShowTopLeftSnackbar(false)}
              duration={3000}
            />
          )}
          {showTopRightSnackbar && (
            <Snackbar
              message='📍 Top right corner'
              snackbarPosition='top-right'
              onClose={() => setShowTopRightSnackbar(false)}
              duration={3000}
            />
          )}
          {showBottomLeftSnackbar && (
            <Snackbar
              message='📍 Bottom left corner'
              snackbarPosition='bottom-left'
              onClose={() => setShowBottomLeftSnackbar(false)}
              duration={3000}
            />
          )}
          {showBottomRightSnackbar && (
            <Snackbar
              message='📍 Bottom right corner'
              snackbarPosition='bottom-right'
              onClose={() => setShowBottomRightSnackbar(false)}
              duration={3000}
            />
          )}
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Animation Examples</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Different entrance animations
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowFadeSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#10b981' }}
            >
              Fade In
            </button>
            <button
              onClick={() => setShowSlideSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#10b981' }}
            >
              Slide In
            </button>
            <button
              onClick={() => setShowGrowSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#10b981' }}
            >
              Grow In
            </button>
          </div>

          {showFadeSnackbar && (
            <Snackbar
              message='✨ Fade animation - smooth opacity transition'
              snackbarAnimation='fade'
              snackbarPosition='bottom'
              onClose={() => setShowFadeSnackbar(false)}
              duration={3000}
            />
          )}
          {showSlideSnackbar && (
            <Snackbar
              message='🎬 Slide animation - enters from the side'
              snackbarAnimation='slide'
              snackbarPosition='bottom'
              onClose={() => setShowSlideSnackbar(false)}
              duration={3000}
            />
          )}
          {showGrowSnackbar && (
            <Snackbar
              message='🎯 Grow animation - scales up from center'
              snackbarAnimation='grow'
              snackbarPosition='bottom'
              onClose={() => setShowGrowSnackbar(false)}
              duration={3000}
            />
          )}
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Draggable Feature</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            💡 <strong>Draggable mode:</strong> Drag the snackbar 100px away to dismiss it. Won't
            auto-close.
            <br />
            💡 <strong>Normal mode:</strong> Auto-closes after the specified duration (3 seconds).
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowDraggableSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#f59e0b' }}
            >
              Draggable Snackbar
            </button>
            <button
              onClick={() => setShowNormalSnackbar(true)}
              style={{ ...buttonStyle, backgroundColor: '#f59e0b' }}
            >
              Auto-close Snackbar
            </button>
          </div>

          {showDraggableSnackbar && (
            <Snackbar
              message='👆 Drag me at least 100px away to dismiss!'
              dragable={true}
              snackbarPosition='bottom'
              snackbarAnimation='slide'
              onClose={() => setShowDraggableSnackbar(false)}
            />
          )}
          {showNormalSnackbar && (
            <Snackbar
              message='⏱️ I will auto-close in 3 seconds...'
              dragable={false}
              duration={3000}
              snackbarPosition='bottom'
              snackbarAnimation='slide'
              onClose={() => setShowNormalSnackbar(false)}
            />
          )}
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Multiple Snackbars</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Show multiple snackbars at different positions simultaneously
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setShowTopSnackbar(true);
                setTimeout(() => setShowBottomSnackbar(true), 150);
                setTimeout(() => setShowTopRightSnackbar(true), 300);
              }}
              style={{ ...buttonStyle, backgroundColor: '#8b5cf6' }}
            >
              Show Multiple (3)
            </button>
            <button
              onClick={() => {
                setShowTopLeftSnackbar(true);
                setTimeout(() => setShowTopRightSnackbar(true), 100);
                setTimeout(() => setShowBottomLeftSnackbar(true), 200);
                setTimeout(() => setShowBottomRightSnackbar(true), 300);
              }}
              style={{ ...buttonStyle, backgroundColor: '#ec4899' }}
            >
              Show All Corners
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Custom Duration</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Control how long the snackbar stays visible
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const show = setShowBottomSnackbar;
                show(true);
              }}
              style={{ ...buttonStyle, backgroundColor: '#06b6d4' }}
            >
              Short (3s default)
            </button>
            <button
              onClick={() => {
                const [show] = [setShowTopSnackbar];
                show(true);
              }}
              style={{ ...buttonStyle, backgroundColor: '#06b6d4' }}
            >
              Medium (5s)
            </button>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '48px' }}>
        <h2>ContextMenu Examples</h2>

        <div style={{ marginBottom: '48px' }}>
          <h3>Basic Context Menu</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Right-click on the box below to open context menu
          </p>
          <div
            onContextMenu={(e) => {
              e.preventDefault();
              setContextMenuPosition({ x: e.clientX, y: e.clientY });
              setContextMenuVisible(true);
            }}
            onClick={() => setContextMenuVisible(false)}
            style={{
              width: '400px',
              height: '300px',
              backgroundColor: '#f3f4f6',
              border: '2px dashed #9ca3af',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'context-menu',
              userSelect: 'none',
            }}
          >
            <div style={{ textAlign: 'center', color: '#6b7280' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🖱️</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>Right-click here</div>
              <div style={{ fontSize: '14px', marginTop: '4px' }}>to open context menu</div>
            </div>
          </div>

          <ContextMenu
            visible={contextMenuVisible}
            position={contextMenuPosition}
            onClose={() => setContextMenuVisible(false)}
            dividerIndex={[2, 5]}
          >
            <div
              onClick={() => {
                alert('Cut action');
                setContextMenuVisible(false);
              }}
            >
              ✂️ Cut
            </div>
            <div
              onClick={() => {
                alert('Copy action');
                setContextMenuVisible(false);
              }}
            >
              📋 Copy
            </div>
            <div
              onClick={() => {
                alert('Paste action');
                setContextMenuVisible(false);
              }}
            >
              📄 Paste
            </div>
            <div
              onClick={() => {
                alert('Delete action');
                setContextMenuVisible(false);
              }}
            >
              🗑️ Delete
            </div>
            <div
              onClick={() => {
                alert('Rename action');
                setContextMenuVisible(false);
              }}
            >
              ✏️ Rename
            </div>
            <div
              onClick={() => {
                alert('Properties');
                setContextMenuVisible(false);
              }}
            >
              ⚙️ Properties
            </div>
          </ContextMenu>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Context Menu with Multiple Areas</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Different areas can show different context menus
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div
              onContextMenu={(e) => {
                e.preventDefault();
                setContextMenuPosition({ x: e.clientX, y: e.clientY });
                setContextMenuVisible(true);
              }}
              style={{
                width: '200px',
                height: '150px',
                backgroundColor: '#dbeafe',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'context-menu',
                userSelect: 'none',
              }}
            >
              <div style={{ textAlign: 'center', color: '#1e40af' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📁</div>
                <div style={{ fontSize: '14px', fontWeight: '500' }}>Folder</div>
              </div>
            </div>

            <div
              onContextMenu={(e) => {
                e.preventDefault();
                setContextMenuPosition({ x: e.clientX, y: e.clientY });
                setContextMenuVisible(true);
              }}
              style={{
                width: '200px',
                height: '150px',
                backgroundColor: '#fce7f3',
                border: '2px solid #ec4899',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'context-menu',
                userSelect: 'none',
              }}
            >
              <div style={{ textAlign: 'center', color: '#9f1239' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📄</div>
                <div style={{ fontSize: '14px', fontWeight: '500' }}>Document</div>
              </div>
            </div>

            <div
              onContextMenu={(e) => {
                e.preventDefault();
                setContextMenuPosition({ x: e.clientX, y: e.clientY });
                setContextMenuVisible(true);
              }}
              style={{
                width: '200px',
                height: '150px',
                backgroundColor: '#dcfce7',
                border: '2px solid #10b981',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'context-menu',
                userSelect: 'none',
              }}
            >
              <div style={{ textAlign: 'center', color: '#065f46' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>🖼️</div>
                <div style={{ fontSize: '14px', fontWeight: '500' }}>Image</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Context Menu Features</h3>
          <ul style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8' }}>
            <li>✅ Opens at cursor position on right-click</li>
            <li>✅ Closes when clicking outside or selecting an item</li>
            <li>
              ✅ Divider support with <code>dividerIndex</code> prop
            </li>
            <li>✅ Hover effects on menu items</li>
            <li>✅ Portal rendering for proper z-index layering</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
