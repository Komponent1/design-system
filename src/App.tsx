import { Alert } from '../lib';

const CustomMessage = () => (
  <div>
    <strong>Custom Alert!</strong>
    <p>This alert uses a custom React component as its message.</p>
  </div>
);

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <div style={{ marginBottom: '1rem' }}>
        <Alert type='success' message='This is a success alert!' />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Alert type='error' message='This is an error alert!' />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Alert type='warning' message='This is a warning alert!' />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Alert type='info' message='This is an info alert!' />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Alert type='info' message='This is a closable info alert!' size='sm' />
      </div>
      <Alert type='warning' message='This is a medium warning alert!' size='md' />
      <Alert type='error' message='This is a large error alert!' size='lg' />

      <Alert type='success' message='This is a custom color success alert!' variant='outlined' />
      <Alert type='info' message='This is a filled info alert!' variant='filled' />

      <Alert type='info' message={<CustomMessage />} />
      <Alert head='HeadWarming' message='This is head message' type='warning' />
    </div>
  );
}

export default App;
