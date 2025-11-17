import { Button } from '../lib';

function App() {
  return (
    <div>
      <div>
        <Button label='Click me' onClick={() => alert('Button clicked!')} content='Click me' />
        <Button
          label='Disabled Button'
          onClick={() => alert('This should not happen!')}
          disabled
          content='Disabled Button'
        />
        <Button variant='outline' content='Outline Button' onClick={() => {}} />
        <Button variant='text' content='Text Button' onClick={() => {}} />
        <Button size='sm' content='Small Button' onClick={() => {}} />
        <Button size='lg' content='Large Button' onClick={() => {}} />
        <Button corner='square' content='Square Corner Button' onClick={() => {}} />
        <Button full content='Full Width Button' onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
