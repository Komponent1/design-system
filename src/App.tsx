import { Carousel } from '../lib';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
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
