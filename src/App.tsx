import { Button } from '../lib';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>

      <section>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => {}} content={'Solid'} />
          <Button variant='outline' onClick={() => {}} content={'Outline'} />
          <Button variant='text' onClick={() => {}} content={'Text'} />
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Sizes</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button size='sm' onClick={() => {}} content={'Small'} />
          <Button size='md' onClick={() => {}} content={'Medium'} />
          <Button size='lg' onClick={() => {}} content={'Large'} />
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Corners & Disabled</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button corner='square' onClick={() => {}} content={'Square'} />
          <Button corner='rounded' onClick={() => {}} content={'Rounded'} />
          <Button disabled onClick={() => {}} content={'Disabled'} />
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Custom color</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button color='#1976d2' onClick={() => {}} content={'Primary'} />
          <Button variant='outline' color='#ff6600' onClick={() => {}} content={'Orange Outline'} />
          <Button variant='text' color='#4caf50' onClick={() => {}} content={'Green Text'} />
        </div>
      </section>
    </div>
  );
}

export default App;
