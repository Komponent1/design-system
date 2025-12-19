import { useState } from 'react';
import { Modal } from '../lib';

function App() {
  const [isDefaultOpen, setIsDefaultOpen] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  const [isXLargeOpen, setIsXLargeOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isFadeOpen, setIsFadeOpen] = useState(false);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isTopRightOpen, setIsTopRightOpen] = useState(false);
  const [isTopLeftOpen, setIsTopLeftOpen] = useState(false);
  const [isBottomRightOpen, setIsBottomRightOpen] = useState(false);
  const [isBottomLeftOpen, setIsBottomLeftOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
        <h2>Modal Examples</h2>

        <div style={{ marginBottom: 48 }}>
          <h3>Variants</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsDefaultOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Default Modal
            </button>
            <button
              onClick={() => setIsFullscreenOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Fullscreen Modal
            </button>
          </div>

          <Modal isOpen={isDefaultOpen} onClose={() => setIsDefaultOpen(false)} variant='default'>
            <div style={{ padding: '1rem 0' }}>
              <h3>Default Modal</h3>
              <p>This is a default modal with standard styling.</p>
              <p>It appears in the center of the screen with a backdrop.</p>
            </div>
          </Modal>

          <Modal
            isOpen={isFullscreenOpen}
            onClose={() => setIsFullscreenOpen(false)}
            variant='fullscreen'
          >
            <div style={{ padding: '2rem 0' }}>
              <h2>Fullscreen Modal</h2>
              <h3>Fullscreen Experience</h3>
              <p>This modal takes up the entire viewport.</p>
              <p>Perfect for immersive content or complex forms.</p>
              <div
                style={{
                  marginTop: '2rem',
                  height: '200px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p>Content can fill the entire screen</p>
              </div>
            </div>
          </Modal>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Sizes</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsSmallOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Small (sm)
            </button>
            <button
              onClick={() => setIsMediumOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Medium (md)
            </button>
            <button
              onClick={() => setIsLargeOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Large (lg)
            </button>
            <button
              onClick={() => setIsXLargeOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              X-Large (xl)
            </button>
          </div>

          <Modal isOpen={isSmallOpen} onClose={() => setIsSmallOpen(false)} size='sm'>
            <h4>Small Modal</h4>
            <p>This is a small modal (20rem width).</p>
          </Modal>

          <Modal isOpen={isMediumOpen} onClose={() => setIsMediumOpen(false)} size='md'>
            <h4>Medium Modal</h4>
            <p>This is a medium modal (28rem width).</p>
            <p>Default size for most use cases.</p>
          </Modal>

          <Modal isOpen={isLargeOpen} onClose={() => setIsLargeOpen(false)} size='lg'>
            <h4>Large Modal</h4>
            <p>This is a large modal (40rem width).</p>
            <p>Suitable for forms or content that needs more space.</p>
          </Modal>

          <Modal isOpen={isXLargeOpen} onClose={() => setIsXLargeOpen(false)} size='xl'>
            <h4>Extra Large Modal</h4>
            <p>This is an extra large modal (56rem width).</p>
            <p>Perfect for complex layouts or data tables.</p>
            <p>Great for detailed content presentation.</p>
          </Modal>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Positions</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsTopOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Top Position
            </button>
            <button
              onClick={() => setIsBottomOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Bottom Position
            </button>
          </div>

          <Modal isOpen={isTopOpen} onClose={() => setIsTopOpen(false)} position='top'>
            <h4>Top Positioned Modal</h4>
            <p>This modal appears at the top of the viewport.</p>
            <p>Useful for notifications or top-anchored content.</p>
          </Modal>

          <Modal isOpen={isBottomOpen} onClose={() => setIsBottomOpen(false)} position='bottom'>
            <h4>Bottom Positioned Modal</h4>
            <p>This modal appears at the bottom of the viewport.</p>
            <p>Great for mobile-style bottom sheets.</p>
          </Modal>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Animation Types</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsFadeOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Fade Animation
            </button>
            <button
              onClick={() => setIsSlideOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Slide Animation
            </button>
            <button
              onClick={() => setIsZoomOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Zoom Animation
            </button>
          </div>

          <Modal isOpen={isFadeOpen} onClose={() => setIsFadeOpen(false)} animationType='fade'>
            <h4>Fade Animation</h4>
            <p>This modal fades in smoothly.</p>
          </Modal>

          <Modal isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} animationType='slide'>
            <h4>Slide Animation</h4>
            <p>This modal slides down from the top.</p>
          </Modal>

          <Modal isOpen={isZoomOpen} onClose={() => setIsZoomOpen(false)} animationType='zoom'>
            <h4>Zoom Animation</h4>
            <p>This modal zooms in with a scale effect.</p>
          </Modal>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Close Button Positions</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsTopRightOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Top Right
            </button>
            <button
              onClick={() => setIsTopLeftOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Top Left
            </button>
            <button
              onClick={() => setIsBottomRightOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Bottom Right
            </button>
            <button
              onClick={() => setIsBottomLeftOpen(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Bottom Left
            </button>
          </div>

          <Modal
            isOpen={isTopRightOpen}
            onClose={() => setIsTopRightOpen(false)}
            closeButtonPosition='top-right'
          >
            <h4>Close Button - Top Right</h4>
            <p>The close button (✕) is positioned at the top right corner.</p>
            <p>Click the X button or press ESC to close.</p>
          </Modal>

          <Modal
            isOpen={isTopLeftOpen}
            onClose={() => setIsTopLeftOpen(false)}
            closeButtonPosition='top-left'
          >
            <h4>Close Button - Top Left</h4>
            <p>The close button (✕) is positioned at the top left corner.</p>
            <p>Click the X button or press ESC to close.</p>
          </Modal>

          <Modal
            isOpen={isBottomRightOpen}
            onClose={() => setIsBottomRightOpen(false)}
            closeButtonPosition='bottom-right'
          >
            <h4>Close Button - Bottom Right</h4>
            <p>The close button (✕) is positioned at the bottom right corner.</p>
            <p>Click the X button or press ESC to close.</p>
          </Modal>

          <Modal
            isOpen={isBottomLeftOpen}
            onClose={() => setIsBottomLeftOpen(false)}
            closeButtonPosition='bottom-left'
          >
            <h4>Close Button - Bottom Left</h4>
            <p>The close button (✕) is positioned at the bottom left corner.</p>
            <p>Click the X button or press ESC to close.</p>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default App;
