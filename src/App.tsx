import { Button } from '../lib';
import Badge from '../lib/badge/badge';
import ContentBadge from '../lib/badge/contentBadge';

function App() {
  return (
    <div>
      <div>
        <Badge text='Small Badge' size='sm' />
        <Badge text='Large Badge' size='lg' />
        <Badge text='New Badge' size='md' />

        <Badge text='Soft Badge' variant='soft' color='green' />
        <Badge text='Outlined Badge' variant='outlined' color='red' />
        <Badge text='Hard Badge' variant='hard' color='purple' />

        <Badge text='Rounded Badge' corner='rounded' />
        <Badge text='Square Badge' corner='square' />

        <ContentBadge size='sm'>
          <span role='img' aria-label='star'>
            ⭐
          </span>{' '}
          Small Content Badge
        </ContentBadge>
        <ContentBadge size='lg' variant='soft' color='blue'>
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
          Large Soft Content Badge
        </ContentBadge>
      </div>

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
