import { Avatar } from '../lib';

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Avatar
        size='sm'
        src='https://avatars.githubusercontent.com/u/73334068?v=4'
        alt='User Avatar'
        outline
        outlineColor='red'
      />
      <Avatar
        size='md'
        src='https://avatars.githubusercontent.com/u/73334068?v=4'
        alt='User Avatar'
        outline
        outlineColor='red'
      />
      <Avatar
        size='lg'
        src='https://avatars.githubusercontent.com/u/73334068?v=4'
        alt='User Avatar'
        outline
        outlineColor='red'
      />
      <Avatar
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
      />
      <Avatar
        variant='square'
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
      />
      <Avatar
        variant='square'
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
      />
      <Avatar type='text' size='lg' variant='circle' outline outlineColor='green' alt='ACT' />
      <Avatar
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='top'
        dotColor='green'
      />
      <Avatar
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='top'
        dotColor='green'
      />
      <Avatar
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='bottom'
        dotColor='green'
      />
      <Avatar
        variant='square'
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='bottom'
        dotColor='green'
      />
      <Avatar
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='top'
        dotColor='green'
      />
      <Avatar
        size='lg'
        variant='square'
        src='https://cdn.dailyvet.co.kr/wp-content/uploads/2024/05/15231647/20240515ceva_experts4.jpg'
        alt='Expert Avatar'
        outline
        outlineColor='blue'
        dot='top'
        dotColor='green'
      />
    </div>
  );
}

export default App;
