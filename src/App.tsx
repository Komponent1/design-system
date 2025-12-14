import { Table } from '../lib';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>
      <div
        style={{
          border: '1px solid #d2d2d2',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <Table
          datas={[
            { name: 'Alice', age: 30, city: 'New York' },
            { name: 'Bob', age: 25, city: 'San Francisco' },
            { name: 'Charlie', age: 35, city: 'Los Angeles' },
          ]}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Age', accessor: 'age' },
            { header: 'City', accessor: 'city' },
          ]}
          variant='default'
        />
      </div>
      <div
        style={{
          border: '1px solid #d2d2d2',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <Table
          datas={[
            { name: 'Alice', age: 30, city: 'New York' },
            { name: 'Bob', age: 25, city: 'San Francisco' },
            { name: 'Charlie', age: 35, city: 'Los Angeles' },
          ]}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Age', accessor: 'age' },
            { header: 'City', accessor: 'city' },
          ]}
          variant='striped'
        />
      </div>
      <div
        style={{
          border: '1px solid #d2d2d2',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <Table
          datas={[
            { name: 'Alice', age: 30, city: 'New York' },
            { name: 'Bob', age: 25, city: 'San Francisco' },
            { name: 'Charlie', age: 35, city: 'Los Angeles' },
          ]}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Age', accessor: 'age' },
            { header: 'City', accessor: 'city' },
          ]}
          variant='bordered'
        />
      </div>

      <div
        style={{
          border: '1px solid #d2d2d2',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <Table
          selecterable
          datas={[
            { name: 'Alice', age: 30, city: 'New York' },
            { name: 'Bob', age: 25, city: 'San Francisco' },
            { name: 'Charlie', age: 35, city: 'Los Angeles' },
          ]}
          columns={[
            { header: 'Name', accessor: 'name' },
            { header: 'Age', accessor: 'age' },
            { header: 'City', accessor: 'city' },
          ]}
          variant='bordered'
        />
      </div>
    </div>
  );
}

export default App;
