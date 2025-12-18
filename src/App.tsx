import { Skeleton } from '../lib';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ padding: 24 }}>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ padding: '0 24px' }}>Skeleton Examples</h2>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Simple Skeleton - Different Sizes</h3>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ width: '300px' }}>
              <h4>Small</h4>
              <Skeleton variant='simple' size='sm' lineCount={3} />
            </div>
            <div style={{ width: '300px' }}>
              <h4>Medium</h4>
              <Skeleton variant='simple' size='md' lineCount={3} />
            </div>
            <div style={{ width: '300px' }}>
              <h4>Large</h4>
              <Skeleton variant='simple' size='lg' lineCount={3} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Simple Skeleton - Different Line Counts</h3>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ width: '300px' }}>
              <h4>1 Line</h4>
              <Skeleton variant='simple' size='md' lineCount={1} />
            </div>
            <div style={{ width: '300px' }}>
              <h4>5 Lines</h4>
              <Skeleton variant='simple' size='md' lineCount={5} />
            </div>
            <div style={{ width: '300px' }}>
              <h4>8 Lines</h4>
              <Skeleton variant='simple' size='md' lineCount={8} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Card Skeleton - Different Sizes</h3>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ width: '350px' }}>
              <h4>Small</h4>
              <Skeleton variant='card' size='sm' lineCount={3} />
            </div>
            <div style={{ width: '400px' }}>
              <h4>Medium</h4>
              <Skeleton variant='card' size='md' lineCount={3} />
            </div>
            <div style={{ width: '450px' }}>
              <h4>Large</h4>
              <Skeleton variant='card' size='lg' lineCount={3} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Card Skeleton - Different Content Lengths</h3>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ width: '400px' }}>
              <h4>Short Content (2 lines)</h4>
              <Skeleton variant='card' size='md' lineCount={2} />
            </div>
            <div style={{ width: '400px' }}>
              <h4>Long Content (6 lines)</h4>
              <Skeleton variant='card' size='md' lineCount={6} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Use Case: Loading Article</h3>
          <div
            style={{
              maxWidth: '800px',
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Skeleton variant='simple' size='lg' lineCount={1} />
            <div style={{ marginTop: '16px' }}>
              <Skeleton variant='simple' size='md' lineCount={5} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Use Case: Loading User Profile</h3>
          <div
            style={{
              maxWidth: '600px',
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <Skeleton variant='card' size='lg' lineCount={4} />
          </div>
        </div>

        <div style={{ marginBottom: 48, padding: '0 24px' }}>
          <h3>Use Case: Loading Comment List</h3>
          <div style={{ maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <Skeleton variant='card' size='sm' lineCount={2} />
            </div>
            <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <Skeleton variant='card' size='sm' lineCount={3} />
            </div>
            <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
              <Skeleton variant='card' size='sm' lineCount={2} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
