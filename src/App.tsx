import { Spinner } from '../lib';

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Spinner size={50} color='#ff5733' />
      <Spinner size='lg' variant='inverted' />
      <Spinner size='sm' />
      <Spinner />
    </div>
  );
}

export default App;
