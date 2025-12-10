import { Pagenation } from '../lib';

function App() {
  return (
    <div>
      <h1>Design System Demo</h1>
      <Pagenation
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />
      <Pagenation
        totalItems={150}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />
      <Pagenation
        totalItems={30}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />

      <Pagenation
        variant='compact'
        totalItems={30}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />

      <Pagenation
        variant='compact'
        totalItems={150}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={(page) => console.log('Page changed to:', page)}
      />
    </div>
  );
}

export default App;
