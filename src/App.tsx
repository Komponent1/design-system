import { useEffect, useState } from 'react';
import { Progress } from '../lib';

function App() {
  const [per, setPer] = useState(0.7);
  useEffect(() => {
    const interval = setInterval(() => {
      setPer((prev) => {
        const next = prev + 0.1;
        if (next > 1) {
          return 0;
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Design System Demo</h1>
      <Progress progress={per} size='sm' variant='bar' label='Loading' percent width={'120px'} />
      <Progress progress={0.7} size='md' variant='bar' label='Loading' percent />
      <Progress progress={0.7} size='lg' variant='bar' label='Loading' percent />

      <Progress
        progress={0.4}
        size='sm'
        variant='circle'
        color='#ff5733'
        label='Processing'
        percent
      />
      <Progress
        progress={per}
        size='md'
        variant='circle'
        color='#ff5733'
        label='Processing'
        percent
      />
      <Progress
        progress={1}
        size='lg'
        variant='circle'
        color='#ff5733'
        label='Processing'
        percent
      />
    </div>
  );
}

export default App;
