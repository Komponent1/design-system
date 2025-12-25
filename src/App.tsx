import { useState } from 'react';
import { Select } from '../lib';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');
  const [selectedDisabled, setSelectedDisabled] = useState('');
  const [selectedDisabled2, setSelectedDisabled2] = useState('');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', minHeight: '100vh' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: '24px' }}>
        <h2>Select Examples</h2>

        <div style={{ marginBottom: '48px' }}>
          <h3>Basic Select</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Simple dropdown with options
          </p>
          <Select
            options={[
              { value: 'us', label: 'United States', icon: '🇺🇸' },
              { value: 'kr', label: 'South Korea', icon: '🇰🇷' },
              { value: 'jp', label: 'Japan', icon: '🇯🇵' },
              { value: 'cn', label: 'China', icon: '🇨🇳' },
              { value: 'uk', label: 'United Kingdom', icon: '🇬🇧' },
            ]}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder='Select a country'
            width='300px'
          />
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            Selected: {selectedCountry || 'None'}
          </p>
        </div>

        {/* Example for SelectOption natural width */}
        <div style={{ marginBottom: '48px' }}>
          <h3>Option 너비 예제</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            각 옵션이 자신의 길이에 따라 너비가 결정됩니다.
          </p>
          <Select
            options={[
              { value: 'short', label: '짧음' },
              { value: 'medium', label: '중간 길이 옵션' },
              { value: 'long', label: '이 옵션은 매우 길어서 SelectButton보다 더 넓게 표시됩니다.' },
              { value: 'emoji', label: '😀 이모지 옵션' },
            ]}
            value={selectedFruit}
            onChange={setSelectedFruit}
            placeholder='옵션을 선택하세요'
            width='220px'
          />
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            선택됨: {selectedFruit || '없음'}
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Sizes</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Three different sizes available
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              value={selectedSize}
              onChange={setSelectedSize}
              size='sm'
              width='300px'
            />
            <Select
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              value={selectedSize}
              onChange={setSelectedSize}
              size='md'
              width='300px'
            />
            <Select
              options={[
                { value: 'sm', label: 'Small' },
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
              ]}
              value={selectedSize}
              onChange={setSelectedSize}
              size='lg'
              width='300px'
            />
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Variants</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Default and underlined styles
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
              options={[
                { value: 'apple', label: 'Apple', icon: '🍎' },
                { value: 'banana', label: 'Banana', icon: '🍌' },
                { value: 'orange', label: 'Orange', icon: '🍊' },
              ]}
              value={selectedFruit}
              onChange={setSelectedFruit}
              variant='default'
              width='300px'
            />
            <Select
              options={[
                { value: 'apple', label: 'Apple', icon: '🍎' },
                { value: 'banana', label: 'Banana', icon: '🍌' },
                { value: 'orange', label: 'Orange', icon: '🍊' },
              ]}
              value={selectedFruit}
              onChange={setSelectedFruit}
              variant='underlined'
              width='300px'
            />
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>With Descriptions</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Options can include descriptions
          </p>
          <Select
            options={[
              {
                value: 'react',
                label: 'React',
                icon: '⚛️',
                description: 'A JavaScript library for building user interfaces',
              },
              {
                value: 'vue',
                label: 'Vue.js',
                icon: '💚',
                description: 'The Progressive JavaScript Framework',
              },
              {
                value: 'angular',
                label: 'Angular',
                icon: '🅰️',
                description: 'Platform for building mobile and desktop web applications',
              },
            ]}
            value={selectedFramework}
            onChange={setSelectedFramework}
            placeholder='Select a framework'
            width='400px'
          />
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3>Disabled State</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Disabled select and disabled options
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
              ]}
              value={selectedDisabled}
              onChange={setSelectedDisabled}
              disabled
              width='300px'
            />
            <Select
              options={[
                { value: 'option1', label: 'Available Option' },
                { value: 'option2', label: 'Disabled Option', disabled: true },
                { value: 'option3', label: 'Another Available' },
              ]}
              value={selectedDisabled2}
              onChange={setSelectedDisabled2}
              placeholder='Some options are disabled'
              width='300px'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
