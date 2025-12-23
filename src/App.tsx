import { Divider } from '../lib';

function App() {
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
      <section style={{ marginTop: '48px' }}>
        <h2>Divider Examples</h2>

        <div style={{ marginBottom: '48px' }}>
          <h3>Basic Dividers</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Simple horizontal and vertical dividers
          </p>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Horizontal Divider</h4>
            <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <p>Content above divider</p>
              <Divider />
              <p>Content below divider</p>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Vertical Divider</h4>
            <div
              style={{
                padding: '16px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                height: '100px',
              }}
            >
              <div>Left Content</div>
              <Divider orientation='vertical' />
              <div>Middle Content</div>
              <Divider orientation='vertical' />
              <div>Right Content</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Divider Variants</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Different line styles: solid, dashed, dotted
          </p>

          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Solid (default)
              </p>
              <Divider />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Dashed</p>
              <Divider />
            </div>

            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Dotted</p>
              <Divider />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Divider Types</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Different width options: fullWidth, inset, middle
          </p>

          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Full Width (100%)
              </p>
              <Divider type='fullWidth' />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Inset (90%)</p>
              <Divider type='inset' />
            </div>

            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Middle (80%)
              </p>
              <Divider type='middle' />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Divider with Text</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Dividers can contain text or other content
          </p>

          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Center (default)
              </p>
              <Divider childrenPosition='center'>OR</Divider>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Left Aligned
              </p>
              <Divider childrenPosition='left'>Section Title</Divider>
            </div>

            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Right Aligned
              </p>
              <Divider childrenPosition='right'>End</Divider>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Custom Styling</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Customize thickness and color
          </p>

          <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Thick divider (4px)
              </p>
              <Divider thickness={4} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Blue divider
              </p>
              <Divider color='#3b82f6' thickness={2} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Green dashed
              </p>
              <Divider color='#10b981' thickness={2} />
            </div>

            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                Red dotted with text
              </p>
              <Divider color='#ef4444' thickness={2}>
                IMPORTANT
              </Divider>
            </div>
          </div>
        </div>

        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            메뉴
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <button
              type='button'
              style={{
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              홈
            </button>
            <Divider orientation='vertical' />
            <button
              type='button'
              style={{
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              소개
            </button>
            <Divider orientation='vertical' />
            <button
              type='button'
              style={{
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              서비스
            </button>
            <Divider orientation='vertical' />
            <button
              type='button'
              style={{
                color: '#2563eb',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              연락처
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Practical Examples</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Real-world usage scenarios
          </p>

          <div
            style={{
              padding: '24px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            }}
          >
            <h4 style={{ margin: '0 0 8px 0' }}>User Profile</h4>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280', fontSize: '14px' }}>
              john@example.com
            </p>

            <Divider />

            <div style={{ margin: '16px 0' }}>
              <h5 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Personal Information</h5>
              <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>Name: John Doe</p>
              <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
                Location: Seoul, Korea
              </p>
            </div>

            <Divider childrenPosition='left'>Settings</Divider>

            <div style={{ margin: '16px 0' }}>
              <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>
                Notifications: Enabled
              </p>
              <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
                Privacy: Public
              </p>
            </div>

            <Divider />

            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
              <button style={{ ...buttonStyle, backgroundColor: '#3b82f6', flex: 1 }}>
                Save Changes
              </button>
              <button style={{ ...buttonStyle, backgroundColor: '#6b7280', flex: 1 }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
