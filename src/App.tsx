import { Input } from '../lib';

function App() {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Input value='' onChange={() => {}} />
        <Input value='Disabled Input' onChange={() => {}} disabled />
        <Input value='Error Input' onChange={() => {}} error />
      </div>
      <div>
        <Input size='sm' value='Small Input' onChange={() => {}} />
        <Input size='md' value='Medium Input' onChange={() => {}} />
        <Input size='lg' value='Large Input' onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
