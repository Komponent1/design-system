import { Button } from '../lib';
import { Accordion } from '../lib';

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Accordion titles={['Section 1', 'Section 2']} outlineVariant='box'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>

      <Accordion titles={['Section 1', 'Section 2']} outlineVariant='innerBox'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>
    </div>
  );
}

export default App;
