import { Card, Carousel, Navbar, Typography } from '../lib';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ padding: 24 }}>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ padding: '0 24px' }}>Card Examples</h2>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <Typography>Basic Content Card</Typography>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card type='content' size='sm'>
              <h4>Small Card</h4>
              <p>This is a small content card.</p>
            </Card>
            <Card type='content' size='md'>
              <h4>Medium Card</h4>
              <p>This is a medium content card with more space.</p>
            </Card>
            <Card type='content' size='lg'>
              <h4>Large Card</h4>
              <p>This is a large content card with even more space for content.</p>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Card with Header</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card type='header-content' size='md' header={<h3>Card Title</h3>}>
              <p>This card has a header section at the top.</p>
              <p>Perfect for titled content blocks.</p>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Card with Footer</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card
              type='content-footer'
              size='md'
              footer={
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Action
                </button>
              }
            >
              <h4>Product Name</h4>
              <p>Description of the product goes here.</p>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Image Cards</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card
              type='image-content'
              size='md'
              src='https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg'
              alt='Mountain landscape'
            >
              <h4>Beautiful Landscape</h4>
              <p>Image at the top, content below.</p>
            </Card>
            <Card
              type='content-image'
              size='md'
              src='https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg'
              alt='Forest'
            >
              <h4>Nature Scene</h4>
              <p>Content at the top, image below.</p>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Image Overlay Card</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card
              type='image_overlay'
              size='lg'
              src='https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg'
              alt='Overlay image'
            >
              <h2>Overlay Title</h2>
              <p>Content overlays the image with a dark background.</p>
            </Card>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Hover Effects</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card type='content' size='md' hoverType='shadow'>
              <h4>Shadow Hover</h4>
              <p>Hover over this card to see shadow effect.</p>
            </Card>
            <Card type='content' size='md' hoverType='lift'>
              <h4>Lift Hover</h4>
              <p>Hover over this card to see lift effect.</p>
            </Card>
            <Card
              type='image-content'
              size='md'
              hoverType='lift'
              src='https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg'
              alt='Hover effect'
            >
              <h4>Image with Lift</h4>
              <p>Combining image and hover effect.</p>
            </Card>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ padding: '0 24px' }}>Navbar Examples</h2>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Centered Variant</h3>
          <Navbar
            title='My Brand'
            variant='centered'
            links={[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ]}
          />
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Right Variant</h3>
          <Navbar
            title='My Brand'
            variant='right'
            links={[
              { label: 'Products', href: '#products' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Blog', href: '#blog' },
            ]}
          />
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Centered with Custom Colors</h3>
          <Navbar
            title='Creative Studio'
            variant='centered'
            backgroundColor='#3b82f6'
            textColor='white'
            links={[
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Team', href: '#team' },
              { label: 'Contact', href: '#contact' },
            ]}
          />
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Right with Icon</h3>
          <Navbar
            title='Dashboard'
            variant='right'
            icon={
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            links={[
              { label: 'Overview', href: '#overview' },
              { label: 'Analytics', href: '#analytics' },
              { label: 'Settings', href: '#settings' },
            ]}
          />
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Centered with Children (User Menu)</h3>
          <Navbar
            title='My App'
            variant='centered'
            links={[
              { label: 'Home', href: '#home' },
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
            ]}
          >
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Sign In
            </button>
          </Navbar>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Right with Children (Avatar + Notifications)</h3>
          <Navbar
            title='Social Network'
            variant='right'
            links={[
              { label: 'Feed', href: '#feed' },
              { label: 'Messages', href: '#messages' },
              { label: 'Notifications', href: '#notifications' },
            ]}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%',
                  }}
                />
              </div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                JD
              </div>
            </div>
          </Navbar>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Centered with Search Bar</h3>
          <Navbar
            title='E-Commerce'
            variant='centered'
            links={[
              { label: 'Shop', href: '#shop' },
              { label: 'Categories', href: '#categories' },
              { label: 'Deals', href: '#deals' },
            ]}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                type='text'
                placeholder='Search...'
                style={{
                  padding: '6px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  width: '200px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 2C10.3132 2 11.6136 2.25866 12.8268 2.7612C14.0401 3.26375 15.1425 4.00035 16.0711 4.92893C16.9997 5.85752 17.7363 6.95991 18.2388 8.17317C18.7413 9.38643 19 10.6868 19 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle cx='9' cy='12' r='7' stroke='currentColor' strokeWidth='2' />
                  <line
                    x1='15'
                    y1='17'
                    x2='21'
                    y2='21'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '18px',
                    height: '18px',
                    backgroundColor: '#ef4444',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </Navbar>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Fixed Type (Stays at top when scrolling)</h3>
          <Navbar
            title='Fixed Header'
            variant='right'
            type='fixed'
            backgroundColor='#1f2937'
            textColor='white'
            links={[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ]}
          >
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: 'white',
                color: '#1f2937',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Get Started
            </button>
          </Navbar>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f3f4f6',
              marginTop: '60px',
              height: '200px',
            }}
          >
            <p>Scroll down to see the fixed navbar behavior (it stays at the top).</p>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3 style={{ padding: '0 24px' }}>Sticky Type (Sticks after scrolling past it)</h3>
          <Navbar
            title='Sticky Header'
            variant='centered'
            type='sticky'
            backgroundColor='#10b981'
            textColor='white'
            links={[
              { label: 'Products', href: '#products' },
              { label: 'Services', href: '#services' },
              { label: 'Blog', href: '#blog' },
            ]}
          />
          <div
            style={{
              padding: '20px',
              backgroundColor: '#d1fae5',
              height: '200px',
            }}
          >
            <p>This navbar will stick to the top when you scroll past it.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 48, padding: '0 24px' }}>
        <h2>Carousel Examples</h2>

        <div style={{ marginBottom: 48 }}>
          <h3>Basic Carousel with Navigation Buttons (Arrows)</h3>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Carousel variant='arrows' showButtons={true} autoPlay={true} autoPlayInterval={2000}>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 1
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 2
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#ec4899',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 3
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 4
              </div>
            </Carousel>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Carousel with Indicators</h3>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Carousel variant='indicators' showButtons={true}>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 1
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#f97316',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 2
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 3
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#84cc16',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 4
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '400px',
                  backgroundColor: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 'bold',
                }}
              >
                Slide 5
              </div>
            </Carousel>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Carousel without Navigation Buttons</h3>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Carousel showButtons={false}>
              <div
                style={{
                  minWidth: '100%',
                  height: '300px',
                  backgroundColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                Image 1
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '300px',
                  backgroundColor: '#06b6d4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                Image 2
              </div>
              <div
                style={{
                  minWidth: '100%',
                  height: '300px',
                  backgroundColor: '#6366f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                }}
              >
                Image 3
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
