import { useState } from 'react';
import { Radio } from '../lib';

function App() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [selectedRadioSize, setSelectedRadioSize] = useState('md');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', minHeight: '100vh' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: '24px' }}>
        <h2>Radio Examples</h2>
        <div style={{ marginBottom: '32px' }}>
          <h3>Basic Radio Group</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Radio
              label='Option 1'
              name='example-radio'
              value='option1'
              checked={selectedRadio === 'option1'}
              onChange={() => setSelectedRadio('option1')}
            />
            <Radio
              label='Option 2'
              name='example-radio'
              value='option2'
              checked={selectedRadio === 'option2'}
              onChange={() => setSelectedRadio('option2')}
            />
            <Radio
              label='Option 3 (Disabled)'
              name='example-radio'
              value='option3'
              checked={selectedRadio === 'option3'}
              onChange={() => setSelectedRadio('option3')}
              disabled
            />
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            Selected: {selectedRadio}
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3>Radio Sizes</h3>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Radio
              label='Small'
              name='size-radio'
              value='sm'
              size='sm'
              checked={selectedRadioSize === 'sm'}
              onChange={() => setSelectedRadioSize('sm')}
            />
            <Radio
              label='Medium'
              name='size-radio'
              value='md'
              size='md'
              checked={selectedRadioSize === 'md'}
              onChange={() => setSelectedRadioSize('md')}
            />
            <Radio
              label='Large'
              name='size-radio'
              value='lg'
              size='lg'
              checked={selectedRadioSize === 'lg'}
              onChange={() => setSelectedRadioSize('lg')}
            />
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            Selected size: {selectedRadioSize}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
