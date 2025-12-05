import { Checkbox } from '../lib';

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Checkbox size='sm' />
      <Checkbox size='md' checked accentColor='#ff0000' />
      <Checkbox size='lg' label='Accept Terms' />
    </div>
  );
}

export default App;
