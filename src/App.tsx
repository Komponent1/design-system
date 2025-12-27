import { useState, useRef } from 'react';
import { Radio, Autocomplete } from '../lib';

function App() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [selectedRadioSize, setSelectedRadioSize] = useState('md');

  // Autocomplete 예제 상태
  const [autoSuggestions, setAutoSuggestions] = useState<string[]>([]);
  const [autoSelected, setAutoSelected] = useState('');
  const sampleData = [
    'Apple',
    'Apple2',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tomato',
    'Watermelon',
  ];
  const handleAutoSearch = (query: string) => {
    if (!query) setAutoSuggestions([]);
    else {
      setAutoSuggestions(
        sampleData.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
      );
    }
  };
  const handleAutoSelect = (value: string) => {
    setAutoSelected(value);
  };

  // --- API 지연 호출 예제 ---
  const [apiSuggestions, setApiSuggestions] = useState<string[]>([]);
  const [apiSelected, setApiSelected] = useState('');
  const [apiLoading, setApiLoading] = useState(false);
  const apiDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // 실제 API라면 fetch/axios 등 사용, 여기선 setTimeout으로 시뮬레이션
  const handleApiSearch = (query: string) => {
    if (apiDebounceRef.current) clearTimeout(apiDebounceRef.current);
    setApiLoading(true);
    setApiSuggestions([]);
    if (!query) {
      setApiLoading(false);
      return;
    }
    apiDebounceRef.current = setTimeout(() => {
      setApiSuggestions(
        sampleData.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
      );
      setApiLoading(false);
    }, 400); // 400ms 디바운스
  };
  const handleApiSelect = (value: string) => {
    setApiSelected(value);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', minHeight: '100vh' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: '24px' }}>
        <h2>Autocomplete Example</h2>
        <div style={{ maxWidth: 320, marginBottom: 32 }}>
          <Autocomplete
            onSearch={handleAutoSearch}
            onSelect={handleAutoSelect}
            suggestions={autoSuggestions}
            placeholder='과일을 입력하세요...'
            width={320}
          />
          <div style={{ color: '#6b7280', fontSize: 13, marginTop: 8 }}>
            {autoSelected ? `선택된 값: ${autoSelected}` : '값을 선택해보세요.'}
          </div>
        </div>
        {/* --- API 지연 호출 예제 --- */}
        <div style={{ maxWidth: 320, marginBottom: 32 }}>
          <Autocomplete
            onSearch={handleApiSearch}
            onSelect={handleApiSelect}
            suggestions={apiSuggestions}
            placeholder='API 지연 호출 예시...'
            width={320}
          />
          <div style={{ color: '#6b7280', fontSize: 13, marginTop: 8 }}>
            {apiLoading
              ? '검색 중...'
              : apiSelected
                ? `선택된 값: ${apiSelected}`
                : 'API로 값을 검색해보세요.'}
          </div>
        </div>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2>Radio Examples</h2>
        <div style={{ marginBottom: '32px' }}>
          <h3>Basic Radio Group</h3>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Radio
              label='Option 1'
              name='example-radio'
              value='option1'
              checked={selectedRadio === 'option1'}
              onChange={() => setSelectedRadio('option1')}
            />
            <Radio
              label='Option 2'
              name='example-radio'
              value='option2'
              checked={selectedRadio === 'option2'}
              onChange={() => setSelectedRadio('option2')}
            />
            <Radio
              label='Option 3 (Disabled)'
              name='example-radio'
              value='option3'
              checked={selectedRadio === 'option3'}
              onChange={() => setSelectedRadio('option3')}
              disabled
            />
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            Selected: {selectedRadio}
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3>Radio Sizes</h3>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Radio
              label='Small'
              name='size-radio'
              value='sm'
              size='sm'
              checked={selectedRadioSize === 'sm'}
              onChange={() => setSelectedRadioSize('sm')}
            />
            <Radio
              label='Medium'
              name='size-radio'
              value='md'
              size='md'
              checked={selectedRadioSize === 'md'}
              onChange={() => setSelectedRadioSize('md')}
            />
            <Radio
              label='Large'
              name='size-radio'
              value='lg'
              size='lg'
              checked={selectedRadioSize === 'lg'}
              onChange={() => setSelectedRadioSize('lg')}
            />
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
            Selected size: {selectedRadioSize}
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
