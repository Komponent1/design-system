import { Button, Badge } from '../lib';
import { Accordion } from '../lib';

const Title = () => (
  <div>
    <Button label='s' onClick={() => {}} content={'Title Button'} />
    <Badge text='New' color='#ff0000' size='sm' />
  </div>
);

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Accordion titles={['Section 1', 'Section 2']} outlineVariant='box'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>

      <Accordion titles={['Section 1', 'Section 2']} outlineVariant='innerBox' titleVariant='plus'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>

      <Accordion titles={['Section 1', 'Section 2']} outlineVariant='none' variant='alwaysOpen'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>

      <Accordion titles={[<Title />, <Title />]} outlineVariant='box' size='lg' titleVariant='plus'>
        <Button label='s' onClick={() => {}} content={'test'} />
        <Button label='s' onClick={() => {}} content={'test'} />
      </Accordion>
    </div>
  );
}

export default App;
