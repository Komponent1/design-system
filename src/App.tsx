import { Input } from '../lib';

function App() {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Input placeholder='default' value='' onChange={() => {}} />
        <Input placeholder='Disabled Input' value='' onChange={() => {}} disabled />
        <Input placeholder='Error Input' value='' onChange={() => {}} error />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input size='sm' placeholder='Small Input' value='' onChange={() => {}} />
        <Input size='md' placeholder='Medium Input' value='' onChange={() => {}} />
        <Input size='lg' placeholder='Large Input' value='' onChange={() => {}} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input variant='underlined' placeholder='Underlined Input' value='' onChange={() => {}} />
        <Input variant='gray' placeholder='Gray Input' value='' onChange={() => {}} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input
          variant='underlined'
          size='lg'
          placeholder='Large Underlined Input'
          value=''
          onChange={() => {}}
        />
        <Input
          variant='gray'
          size='sm'
          placeholder='Small Gray Input'
          value=''
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
