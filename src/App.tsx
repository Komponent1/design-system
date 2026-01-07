import {
  ThemeProvider,
  Button,
  Tab,
  Skeleton,
  Accordion,
  Tooltip,
  Alert,
  Autocomplete,
  Avatar,
  Card,
  Checkbox,
  ContextMenu,
  Divider,
  FloatButton,
  FloatButtonItem,
  Input,
  List,
  Pagination,
  Progress,
  Radio,
  Select,
  Sidebar,
  Snackbar,
  Spinner,
  Stepper,
  Switch,
  Table,
  Typography,
  type ColorType,
  useMediaQuery,
} from '../lib';
import ModeToggle from './ModeToggle';
import { useState } from 'react';
import type { SnackbarAnimation, SnackbarPostion } from '../lib/snackbar/snackbar.type';

export type CustomTheme = {
  color: ColorType & {
    primary: {
      test: string;
    };
  };
  spacing: {
    md: number;
  };
};

export default function App() {
  // useMediaQuery 훅 사용
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isPortrait = useMediaQuery('(orientation: portrait)');

  const [openTooltip, setOpenTooltip] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set<number>());
  const tableColumns = [
    { header: '이름', accessor: 'name' },
    { header: '나이', accessor: 'age' },
    { header: '직업', accessor: 'job' },
  ];
  const tableData = [
    { name: '홍길동', age: 28, job: '개발자' },
    { name: '김철수', age: 32, job: '디자이너' },
    { name: '이영희', age: 25, job: '기획자' },
  ];
  const [openTab, setOpenTab] = useState(false);
  const [openSwitch, setOpenSwitch] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [openStepper, setOpenStepper] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [openSpinner, setOpenSpinner] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarDraggable, setSnackbarDraggable] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarPosition, setSnackbarPosition] = useState('bottom');
  const [snackbarAnimation, setSnackbarAnimation] = useState('slide');
  const [openButton, setOpenButton] = useState(false);
  const [openSkeleton, setOpenSkeleton] = useState(false);
  const [openRadio, setOpenRadio] = useState(false);
  const [radioValue, setRadioValue] = useState('apple');
  const [openProgress, setOpenProgress] = useState(false);
  const [progressValue, setProgressValue] = useState(0.4);
  const [openPagination, setOpenPagination] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationPage2, setPaginationPage2] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [openTypography, setOpenTypography] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [openAutocomplete, setOpenAutocomplete] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [contextVisible, setContextVisible] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [openCheckbox, setOpenCheckbox] = useState(false);
  const [openDivider, setOpenDivider] = useState(false);
  const [openFloatButton, setOpenFloatButton] = useState(false);
  const [acQuery, setAcQuery] = useState('');
  const [acValue, setAcValue] = useState('');
  const [openInput, setOpenInput] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectValue, setSelectValue] = useState('apple');
  const [openMediaQuery, setOpenMediaQuery] = useState(false);
  const selectOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
  ];
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const acData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Peach',
    'Pineapple',
    'Strawberry',
    'Watermelon',
  ];
  const acFiltered = acQuery
    ? acData.filter((item) => item.toLowerCase().includes(acQuery.toLowerCase()))
    : acData;

  return (
    <ThemeProvider>
      <ModeToggle />
      <div
        style={{
          marginTop: 64,
          padding: 32,
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        <Sidebar width={250} variant='collapsible' buttonTop={250}>
          <div style={{ padding: 16, marginTop: 250 }}>사이드바 내용 영역</div>
        </Sidebar>

        {/* useMediaQuery 예제 접기/펼치기 */}
        <Button
          content={openMediaQuery ? '▲ useMediaQuery 예제 접기' : '▼ useMediaQuery 예제 펼치기'}
          onClick={() => setOpenMediaQuery((v) => !v)}
          variant='outline'
        />
        {openMediaQuery && (
          <section>
            <h2>useMediaQuery Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Card type='content' size='full'>
                <div style={{ padding: 16 }}>
                  <Typography type='primary' size='xl' weight='bold' style={{ marginBottom: 16 }}>
                    현재 화면 상태
                  </Typography>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: isMobile ? '#16A34A' : '#DC2626',
                        }}
                      />
                      <Typography>모바일 (≤768px): {isMobile ? '✅' : '❌'}</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: isTablet ? '#16A34A' : '#DC2626',
                        }}
                      />
                      <Typography>태블릿 (769px~1024px): {isTablet ? '✅' : '❌'}</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: isDesktop ? '#16A34A' : '#DC2626',
                        }}
                      />
                      <Typography>데스크톱 (≥1025px): {isDesktop ? '✅' : '❌'}</Typography>
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: isDarkMode ? '#16A34A' : '#DC2626',
                        }}
                      />
                      <Typography>다크 모드 선호: {isDarkMode ? '✅' : '❌'}</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: isPortrait ? '#16A34A' : '#DC2626',
                        }}
                      />
                      <Typography>세로 방향: {isPortrait ? '✅' : '❌'}</Typography>
                    </div>
                  </div>
                </div>
              </Card>

              <Card type='content' size='full'>
                <div style={{ padding: 16 }}>
                  <Typography type='primary' size='xl' weight='bold' style={{ marginBottom: 16 }}>
                    반응형 레이아웃 예제
                  </Typography>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr',
                      gap: 16,
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <Card key={num} type='content' size='sm'>
                        <div style={{ padding: 16, textAlign: 'center' }}>
                          <Typography>카드 {num}</Typography>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Typography
                    type='secondary'
                    size='sm'
                    style={{ marginTop: 16, display: 'block' }}
                  >
                    {isMobile
                      ? '📱 모바일: 1열 레이아웃'
                      : isTablet
                        ? '📱 태블릿: 2열 레이아웃'
                        : '🖥️ 데스크톱: 3열 레이아웃'}
                  </Typography>
                </div>
              </Card>

              <Alert
                type='info'
                message={
                  <Typography type='primary' size='sm'>
                    <strong>Tip:</strong> 브라우저 창 크기를 조절하거나 개발자 도구의 반응형 모드를
                    사용해 보세요!
                  </Typography>
                }
              />
            </div>
          </section>
        )}

        {/* Tooltip 예제 접기/펼치기 */}
        <Button
          content={openTooltip ? '▲ Tooltip 예제 접기' : '▼ Tooltip 예제 펼치기'}
          onClick={() => setOpenTooltip((v) => !v)}
          variant='outline'
        />
        {openTooltip && (
          <section>
            <h2>Tooltip Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Tooltip</div>
                <Tooltip content='툴팁입니다!'>
                  <Button content='Hover me' onClick={() => {}} />
                </Tooltip>
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>위치: top, right, bottom, left</div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <Tooltip content='Top' position='top'>
                    <Button content='Top' size='sm' onClick={() => {}} />
                  </Tooltip>
                  <Tooltip content='Right' position='right'>
                    <Button content='Right' size='sm' onClick={() => {}} />
                  </Tooltip>
                  <Tooltip content='Bottom' position='bottom'>
                    <Button content='Bottom' size='sm' onClick={() => {}} />
                  </Tooltip>
                  <Tooltip content='Left' position='left'>
                    <Button content='Left' size='sm' onClick={() => {}} />
                  </Tooltip>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Delay, 다양한 children</div>
                <Tooltip content='딜레이 1초'>
                  <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    텍스트에 툴팁
                  </span>
                </Tooltip>
                <Tooltip content='아바타 툴팁'>
                  <Avatar src='https://randomuser.me/api/portraits/men/32.jpg' alt='JD' size='sm' />
                </Tooltip>
              </div>
            </div>
          </section>
        )}
        {/* Table 예제 접기/펼치기 */}
        <Button
          content={openTable ? '▲ Table 예제 접기' : '▼ Table 예제 펼치기'}
          onClick={() => setOpenTable((v) => !v)}
          variant='outline'
        />
        {openTable && (
          <section>
            <h2>Table Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 700 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Table</div>
                <Table columns={tableColumns} datas={tableData} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Bordered</div>
                <Table columns={tableColumns} datas={tableData} variant='bordered' />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Striped</div>
                <Table columns={tableColumns} datas={tableData} variant='striped' />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Selectable</div>
                <Table
                  columns={tableColumns}
                  datas={tableData}
                  selecterable
                  onSelectChange={setSelectedRows}
                />
                <div style={{ marginTop: 8, color: '#888' }}>
                  선택된 행: {[...selectedRows].map((i) => tableData[i].name).join(', ')}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Tab 예제 접기/펼치기 */}
        <Button
          content={openTab ? '▲ Tab 예제 접기' : '▼ Tab 예제 펼치기'}
          onClick={() => setOpenTab((v) => !v)}
          variant='outline'
        />
        {openTab && (
          <section>
            <h2>Tab Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Tab</div>
                <Tab tabs={['Tab 1', 'Tab 2', 'Tab 3']}>
                  <div>Tab 1의 내용입니다.</div>
                  <div>Tab 2의 내용입니다.</div>
                  <div>Tab 3의 내용입니다.</div>
                </Tab>
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: box</div>
                <Tab tabs={['Box 1', 'Box 2']} variant='box'>
                  <div>Box 1의 내용입니다.</div>
                  <div>Box 2의 내용입니다.</div>
                </Tab>
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: pill</div>
                <Tab tabs={['Pill 1', 'Pill 2']} variant='pill'>
                  <div>Pill 1의 내용입니다.</div>
                  <div>Pill 2의 내용입니다.</div>
                </Tab>
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: segment</div>
                <Tab tabs={['Segment 1', 'Segment 2']} variant='segment'>
                  <div>Segment 1의 내용입니다.</div>
                  <div>Segment 2의 내용입니다.</div>
                </Tab>
              </div>
            </div>
          </section>
        )}
        {/* Switch 예제 접기/펼치기 */}
        <Button
          content={openSwitch ? '▲ Switch 예제 접기' : '▼ Switch 예제 펼치기'}
          onClick={() => setOpenSwitch((v) => !v)}
          variant='outline'
        />
        {openSwitch && (
          <section>
            <h2>Switch Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Switch</div>
                <Switch checked={switchChecked} onChange={setSwitchChecked} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Label + 상태</div>
                <Switch checked={switchChecked} onChange={setSwitchChecked} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Disabled</div>
                <Switch checked={false} disabled />
                <Switch checked disabled style={{ marginLeft: 8 }} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>크기: sm, md, lg</div>
                <Switch size='sm' checked={switchChecked} onChange={setSwitchChecked} />
                <Switch size='md' checked={switchChecked} onChange={setSwitchChecked} />
                <Switch size='lg' checked={switchChecked} onChange={setSwitchChecked} />
              </div>
            </div>
          </section>
        )}
        {/* Stepper 예제 접기/펼치기 */}
        <Button
          content={openStepper ? '▲ Stepper 예제 접기' : '▼ Stepper 예제 펼치기'}
          onClick={() => setOpenStepper((v) => !v)}
          variant='outline'
        />
        {openStepper && (
          <section>
            <h2>Stepper Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Stepper (4단계)</div>
                <Stepper stepNumber={4} currentStep={currentStep} onStepClick={setCurrentStep} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Label + 클릭 이동</div>
                <Stepper
                  stepNumber={5}
                  labels={['시작', '중간1', '중간2', '중간3', '완료']}
                  currentStep={currentStep}
                  onStepClick={setCurrentStep}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>크기: sm, md, lg</div>
                <Stepper stepNumber={3} size='sm' currentStep={1} />
                <Stepper stepNumber={3} size='md' currentStep={2} />
                <Stepper stepNumber={3} size='lg' currentStep={3} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: default, bottomLabel</div>
                <Stepper stepNumber={4} variant='default' currentStep={2} />
                <Stepper
                  stepNumber={4}
                  variant='bottomLabel'
                  labels={['A', 'B', 'C', 'D']}
                  currentStep={3}
                />
              </div>
            </div>
          </section>
        )}
        {/* Spinner 예제 접기/펼치기 */}
        <Button
          content={openSpinner ? '▲ Spinner 예제 접기' : '▼ Spinner 예제 펼치기'}
          onClick={() => setOpenSpinner((v) => !v)}
          variant='outline'
        />
        {openSpinner && (
          <section>
            <h2>Spinner Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Spinner</div>
                <Spinner />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>크기: sm, md, lg</div>
                <Spinner size='sm' />
                <Spinner size='md' />
                <Spinner size='lg' />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Custom Color</div>
                <Spinner color='#10b981' />
                <Spinner color='#f59e42' />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: ring</div>
                <Spinner variant='inverted' />
              </div>
            </div>
          </section>
        )}
        {/* Snackbar 예제 접기/펼치기 */}
        <Button
          content={openSnackbar ? '▲ Snackbar 예제 접기' : '▼ Snackbar 예제 펼치기'}
          onClick={() => setOpenSnackbar((v) => !v)}
          variant='outline'
        />
        {openSnackbar && (
          <section>
            <h2>Snackbar Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <Button
                  content='기본 스낵바 띄우기'
                  onClick={() => {
                    setSnackbarPosition('bottom');
                    setSnackbarAnimation('slide');
                    setShowSnackbar(true);
                  }}
                />
                <Button
                  content='Top 위치 + Fade'
                  onClick={() => {
                    setSnackbarPosition('top');
                    setSnackbarAnimation('fade');
                    setShowSnackbar(true);
                  }}
                  style={{ marginLeft: 8 }}
                />
                <Button
                  content='Drag 가능 스낵바'
                  onClick={() => {
                    setSnackbarPosition('bottom');
                    setSnackbarAnimation('slide');
                    setShowSnackbar(true);
                    setSnackbarDraggable(true);
                  }}
                  style={{ marginLeft: 8 }}
                />
              </div>
              {showSnackbar && (
                <Snackbar
                  message='스낵바 메시지!'
                  snackbarPosition={snackbarPosition as SnackbarPostion}
                  snackbarAnimation={snackbarAnimation as SnackbarAnimation}
                  dragable={snackbarDraggable}
                  onClose={() => {
                    setShowSnackbar(false);
                    setSnackbarDraggable(false);
                  }}
                />
              )}
            </div>
          </section>
        )}
        <Button
          content={openSkeleton ? '▲ Skeleton 예제 접기' : '▼ Skeleton 예제 펼치기'}
          onClick={() => setOpenSkeleton((v) => !v)}
          variant='outline'
        />
        {openSkeleton && (
          <section>
            <h2>Skeleton Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Skeleton (3줄)</div>
                <Skeleton />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Card Variant (5줄, large)</div>
                <Skeleton variant='card' lineCount={5} size='lg' />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Small, 1줄</div>
                <Skeleton size='sm' lineCount={1} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Medium, 2줄</div>
                <Skeleton size='md' lineCount={2} />
              </div>
            </div>
          </section>
        )}
        {/* Select 예제 접기/펼치기 */}
        <Button
          content={openSelect ? '▲ Select 예제 접기' : '▼ Select 예제 펼치기'}
          onClick={() => setOpenSelect((v) => !v)}
          variant='outline'
        />
        {openSelect && (
          <section>
            <h2>Select Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Select</div>
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  placeholder='과일을 선택하세요'
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Disabled</div>
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  disabled
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>크기: sm, md, lg</div>
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  size='sm'
                  placeholder='Small'
                />
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  size='md'
                  placeholder='Medium'
                />
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  size='lg'
                  placeholder='Large'
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Variant: outline</div>
                <Select
                  options={selectOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  variant='underlined'
                  placeholder='Outline'
                />
              </div>
            </div>
          </section>
        )}
        {/* Progress 예제 접기/펼치기 */}
        <Button
          content={openProgress ? '▲ Progress 예제 접기' : '▼ Progress 예제 펼치기'}
          onClick={() => setOpenProgress((v) => !v)}
          variant='outline'
        />
        {openProgress && (
          <section>
            <h2>Progress Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Progress Bar</div>
                <Progress progress={progressValue} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Large Bar + Label + %</div>
                <Progress progress={progressValue} size='lg' label='진행률' percent width={300} />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Circle Progress</div>
                <Progress
                  progress={progressValue}
                  variant='circle'
                  size='md'
                  label='원형'
                  percent
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Small Circle + Custom Color</div>
                <Progress progress={progressValue} variant='circle' size='sm' color='#10b981' />
              </div>
              <div style={{ marginTop: 16 }}>
                <Button
                  content='진행률 +10%'
                  onClick={() => setProgressValue((v) => Math.min(1, v + 0.1))}
                  size='sm'
                />
                <Button
                  content='진행률 -10%'
                  onClick={() => setProgressValue((v) => Math.max(0, v - 0.1))}
                  size='sm'
                  style={{ marginLeft: 8 }}
                />
              </div>
            </div>
          </section>
        )}
        {/* Button 예제 접기/펼치기 */}
        <Button
          content={openButton ? '▲ 버튼 예제 접기' : '▼ 버튼 예제 펼치기'}
          onClick={() => setOpenButton((v) => !v)}
          variant='outline'
        />
        {openButton && (
          <>
            <section>
              <h2>Button Variants</h2>
              <div style={{ display: 'flex', gap: 16 }}>
                <Button onClick={() => alert('Solid!')} content={'Solid'} variant='solid' />
                <Button onClick={() => alert('Outline!')} content={'Outline'} variant='outline' />
                <Button onClick={() => alert('Text!')} content={'Text'} variant='text' />
              </div>
            </section>
            <section>
              <h2>Button Sizes</h2>
              <div style={{ display: 'flex', gap: 16 }}>
                <Button onClick={() => {}} content={'Small'} size='sm' />
                <Button onClick={() => {}} content={'Medium'} size='md' />
                <Button onClick={() => {}} content={'Large'} size='lg' />
              </div>
            </section>
            <section>
              <h2>Button Disabled</h2>
              <Button onClick={() => {}} content={'Disabled'} disabled />
            </section>
            <section>
              <h2>Button Full Width</h2>
              <Button onClick={() => {}} content={'Full'} full />
            </section>
          </>
        )}
        {/* Radio 예제 접기/펼치기 */}
        <Button
          content={openRadio ? '▲ Radio 예제 접기' : '▼ Radio 예제 펼치기'}
          onClick={() => setOpenRadio((v) => !v)}
          variant='outline'
        />
        {openRadio && (
          <section>
            <h2>Radio Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Radio 그룹</div>
                <Radio
                  label='Apple'
                  name='fruit'
                  value='apple'
                  checked={radioValue === 'apple'}
                  onChange={() => setRadioValue('apple')}
                />
                <Radio
                  label='Banana'
                  name='fruit'
                  value='banana'
                  checked={radioValue === 'banana'}
                  onChange={() => setRadioValue('banana')}
                />
                <Radio
                  label='Cherry'
                  name='fruit'
                  value='cherry'
                  checked={radioValue === 'cherry'}
                  onChange={() => setRadioValue('cherry')}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Disabled 상태</div>
                <Radio label='Disabled' name='disabled' value='disabled' disabled />
                <Radio label='Checked+Disabled' name='disabled2' value='checked' checked disabled />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>크기: sm, md, lg</div>
                <Radio
                  label='Small'
                  name='size-group'
                  value='sm'
                  size='sm'
                  checked={radioValue === 'sm'}
                  onChange={() => setRadioValue('sm')}
                />
                <Radio
                  label='Medium'
                  name='size-group'
                  value='md'
                  size='md'
                  checked={radioValue === 'md'}
                  onChange={() => setRadioValue('md')}
                />
                <Radio
                  label='Large'
                  name='size-group'
                  value='lg'
                  size='lg'
                  checked={radioValue === 'lg'}
                  onChange={() => setRadioValue('lg')}
                />
              </div>
            </div>
          </section>
        )}
        {/* Avatar 예제 접기/펼치기 */}
        <Button
          content={openAvatar ? '▲ Avatar 예제 접기' : '▼ Avatar 예제 펼치기'}
          onClick={() => setOpenAvatar((v) => !v)}
          variant='outline'
        />
        {openAvatar && (
          <section>
            <h2>Avatar Examples</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              {/* 이미지 아바타 */}
              <Avatar src='https://randomuser.me/api/portraits/men/32.jpg' alt='JD' />
              {/* 텍스트 아바타 */}
              <Avatar type='text' alt='AB' backgroundColor='#6366F1' color='#fff' />
              {/* 사이즈 */}
              <Avatar src='https://randomuser.me/api/portraits/women/44.jpg' size='sm' alt='SM' />
              <Avatar src='https://randomuser.me/api/portraits/women/45.jpg' size='lg' alt='LG' />
              {/* variant */}
              <Avatar
                src='https://randomuser.me/api/portraits/men/33.jpg'
                variant='circle'
                alt='RD'
              />
              <Avatar
                src='https://randomuser.me/api/portraits/men/34.jpg'
                variant='square'
                outline
                dot='top'
                alt='SQ'
              />
              {/* outline */}
              <Avatar
                src='https://randomuser.me/api/portraits/men/35.jpg'
                outline
                outlineColor='#F59E0B'
                alt='OL'
              />
              {/* dot */}
              <Avatar
                src='https://randomuser.me/api/portraits/men/36.jpg'
                dot='top'
                dotColor='#22C55E'
                alt='ON'
              />
              <Avatar
                src='https://randomuser.me/api/portraits/men/37.jpg'
                dot='bottom'
                dotColor='#EF4444'
                alt='OFF'
              />
            </div>
            <div style={{ marginTop: 16, color: '#888' }}>
              다양한 props 조합으로 이미지, 텍스트, 크기, 모양, 테두리, dot 상태 등을 표현할 수
              있습니다.
            </div>
          </section>
        )}
        {/* Card 예제 접기/펼치기 */}
        <Button
          content={openCard ? '▲ Card 예제 접기' : '▼ Card 예제 펼치기'}
          onClick={() => setOpenCard((v) => !v)}
          variant='outline'
        />
        {openCard && (
          <section>
            <h2>Card Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* 기본 Content Card */}
              <div>
                <div style={{ marginBottom: 8 }}>Content Card</div>
                <Card type='content' size='md'>
                  <div style={{ padding: 16 }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
                    <p style={{ margin: 0 }}>카드 내용입니다. 기본적인 content 타입 카드입니다.</p>
                  </div>
                </Card>
              </div>

              {/* Header + Content */}
              <div>
                <div style={{ marginBottom: 8 }}>Header + Content</div>
                <Card
                  type='header-content'
                  size='md'
                  header={<div style={{ fontWeight: 'bold' }}>Card Header</div>}
                >
                  <div>헤더가 있는 카드입니다.</div>
                </Card>
              </div>

              {/* Content + Footer */}
              <div>
                <div style={{ marginBottom: 8 }}>Content + Footer</div>
                <Card
                  type='content-footer'
                  size='md'
                  footer={<div style={{ textAlign: 'right' }}>Footer</div>}
                >
                  <div>푸터가 있는 카드입니다.</div>
                </Card>
              </div>

              {/* Image + Content */}
              <div>
                <div style={{ marginBottom: 8 }}>Image + Content</div>
                <Card
                  type='image-content'
                  size='md'
                  src='https://picsum.photos/400/200'
                  alt='Sample image'
                >
                  <div>이미지가 상단에 있는 카드입니다.</div>
                </Card>
              </div>

              {/* Content + Image */}
              <div>
                <div style={{ marginBottom: 8 }}>Content + Image</div>
                <Card
                  type='content-image'
                  size='md'
                  src='https://picsum.photos/400/200'
                  alt='Sample image'
                >
                  <div>이미지가 하단에 있는 카드입니다.</div>
                </Card>
              </div>

              {/* Image Overlay */}
              <div>
                <div style={{ marginBottom: 8 }}>Image Overlay</div>
                <Card
                  type='image_overlay'
                  size='lg'
                  src='https://picsum.photos/600/300'
                  alt='Overlay image'
                >
                  <div style={{ color: 'white', fontWeight: 'bold' }}>
                    이미지 위에 오버레이된 텍스트
                  </div>
                </Card>
              </div>

              {/* Hover Effects */}
              <div>
                <div style={{ marginBottom: 8 }}>Hover Effects</div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Card type='content' size='sm' hoverType='shadow'>
                    <div style={{ padding: 8 }}>Shadow Hover</div>
                  </Card>
                  <Card type='content' size='sm' hoverType='lift'>
                    <div style={{ padding: 8 }}>Lift Hover</div>
                  </Card>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div style={{ marginBottom: 8 }}>Sizes: sm, md, lg</div>
                <div
                  style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}
                >
                  <Card type='content' size='sm'>
                    <div style={{ padding: 8 }}>Small</div>
                  </Card>
                  <Card type='content' size='md'>
                    <div style={{ padding: 12 }}>Medium</div>
                  </Card>
                  <Card type='content' size='lg'>
                    <div style={{ padding: 16 }}>Large</div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* ContextMenu 예제 접기/펼치기 */}
        <Button
          content={openContextMenu ? '▲ ContextMenu 예제 접기' : '▼ ContextMenu 예제 펼치기'}
          onClick={() => setOpenContextMenu((v) => !v)}
          variant='outline'
        />
        {openContextMenu && (
          <section>
            <h2>ContextMenu Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* 기본 ContextMenu */}
              <div>
                <div style={{ marginBottom: 8 }}>우클릭 메뉴</div>
                <div
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setContextMenuPos({ x: e.clientX, y: e.clientY });
                    setContextVisible(true);
                  }}
                  style={{
                    padding: 16,
                    border: '1px dashed #ccc',
                    borderRadius: 8,
                    minHeight: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'context-menu',
                  }}
                >
                  이 영역을 우클릭하세요
                </div>
              </div>

              {/* ContextMenu 렌더링 */}
              <ContextMenu
                position={contextMenuPos}
                visible={contextVisible}
                onClose={() => setContextVisible(false)}
                dividerIndex={[2, 4]}
              >
                <div
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                  onClick={() => setContextVisible(false)}
                >
                  Copy
                </div>
                <div
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                  onClick={() => setContextVisible(false)}
                >
                  Paste
                </div>
                <div
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                  onClick={() => setContextVisible(false)}
                >
                  Cut
                </div>
                <div
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                  onClick={() => setContextVisible(false)}
                >
                  Select All
                </div>
                <div
                  style={{ padding: '8px 12px', cursor: 'pointer', color: '#EF4444' }}
                  onClick={() => setContextVisible(false)}
                >
                  Delete
                </div>
              </ContextMenu>

              <div style={{ color: '#888', fontSize: 12 }}>
                ✓ 우클릭으로 메뉴를 열 수 있습니다
                <br />
                ✓ dividerIndex로 항목 사이에 구분선을 추가할 수 있습니다
                <br />✓ 메뉴 항목을 클릭하면 닫힙니다
              </div>
            </div>
          </section>
        )}
        {/* Alert 예제 접기/펼치기 */}
        <Button
          content={openAlert ? '▲ Alert 예제 접기' : '▼ Alert 예제 펼치기'}
          onClick={() => setOpenAlert((v) => !v)}
          variant='outline'
        />
        {openAlert && (
          <section>
            <h2>Alert Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Alert head='Info' message='이것은 info 알럿입니다.' type='info' />
              <Alert head='Success' message='성공적으로 처리되었습니다!' type='success' />
              <Alert head='Warning' message='경고: 확인이 필요합니다.' type='warning' />
              <Alert head='Error' message='오류가 발생했습니다.' type='danger' />
              <Alert
                head='Outlined'
                message='아웃라인 알럿입니다.'
                type='info'
                variant='outlined'
              />
              <Alert head='Small' message='작은 알럿입니다.' size='sm' />
              <Alert head='Large' message='큰 알럿입니다.' size='lg' />
            </div>
          </section>
        )}
        {/* Typography 예제 접기/펼치기 */}
        <Button
          content={openTypography ? '▲ Typography 예제 접기' : '▼ Typography 예제 펼치기'}
          onClick={() => setOpenTypography((v) => !v)}
          variant='outline'
        />
        {openTypography && (
          <section>
            <h2>Typography Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Typography size='xs'>XS - Extra Small</Typography>
              <Typography size='sm'>SM - Small</Typography>
              <Typography size='md'>MD - Medium (기본)</Typography>
              <Typography size='lg'>LG - Large</Typography>
              <Typography size='xl'>XL - Extra Large</Typography>
              <Typography size='2xl'>2XL</Typography>
              <Typography size='3xl'>3XL</Typography>
              <Typography size='4xl'>4XL</Typography>
              <Typography size='5xl'>5XL</Typography>
              <Typography size='6xl'>6XL</Typography>
              <Typography size='7xl'>7XL</Typography>
              <Typography size='8xl'>8XL</Typography>
              <Typography size='9xl'>9XL</Typography>
              <Typography type='secondary'>Secondary Color</Typography>
              <Typography type='tertiary'>Tertiary Color</Typography>
              <Typography type='disabled'>Disabled Color</Typography>
              <Typography type='inverse' style={{ background: '#333', padding: 4 }}>
                Inverse Color
              </Typography>
              <Typography weight='bold'>Bold Weight</Typography>
              <Typography weight='light'>Light Weight</Typography>
              <Typography weight='extraBold'>Extra Bold Weight</Typography>
              <Typography element='p'>Paragraph element로 렌더링</Typography>
            </div>
          </section>
        )}
        {/* Accordion 예제 접기/펼치기 */}
        <Button
          content={openAccordion ? '▲ Accordion 예제 접기' : '▼ Accordion 예제 펼치기'}
          onClick={() => setOpenAccordion((v) => !v)}
          variant='outline'
        />
        {openAccordion && (
          <section>
            <h2>Accordion Examples</h2>
            <div style={{ maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* outlineVariant: none, box, innerBox */}
              <div>
                <h3>outlineVariant: none</h3>
                <Accordion titles={['None 1', 'None 2']} outlineVariant='none'>
                  <div>outlineVariant가 none일 때 테두리가 없습니다.</div>
                  <div>outlineVariant="none"</div>
                </Accordion>
              </div>
              <div>
                <h3>outlineVariant: box</h3>
                <Accordion titles={['Box 1', 'Box 2']} outlineVariant='box'>
                  <div>outlineVariant가 box일 때 외곽선이 생깁니다.</div>
                  <div>outlineVariant="box"</div>
                </Accordion>
              </div>
              <div>
                <h3>outlineVariant: innerBox</h3>
                <Accordion titles={['InnerBox 1', 'InnerBox 2']} outlineVariant='innerBox'>
                  <div>outlineVariant가 innerBox일 때 내부에만 테두리가 생깁니다.</div>
                  <div>outlineVariant="innerBox"</div>
                </Accordion>
              </div>
              {/* 기본(singleOpen, box) */}
              <div>
                <h3>기본(singleOpen, box)</h3>
                <Accordion
                  titles={['아코디언 1', '아코디언 2', '아코디언 3']}
                  variant='singleOpen'
                  outlineVariant='box'
                >
                  <div>아코디언 1의 내용입니다. 다양한 내용을 넣을 수 있습니다.</div>
                  <div>아코디언 2의 내용입니다. ReactNode로 자유롭게 작성 가능합니다.</div>
                  <div>
                    <b>아코디언 3</b>의 내용입니다.
                    <br />
                    <Button
                      content='내부 버튼'
                      size='sm'
                      onClick={() => alert('아코디언 내부 버튼!')}
                    />
                  </div>
                </Accordion>
              </div>
              {/* alwaysOpen, innerBox */}
              <div>
                <h3>alwaysOpen, innerBox</h3>
                <Accordion
                  titles={['Always 1', 'Always 2']}
                  variant='alwaysOpen'
                  outlineVariant='innerBox'
                >
                  <div>모든 아코디언이 동시에 열릴 수 있습니다.</div>
                  <div>innerBox 스타일이 적용됩니다.</div>
                </Accordion>
              </div>
              {/* titleVariant: arrow, plus */}
              <div>
                <h3>titleVariant: arrow</h3>
                <Accordion titles={['Arrow 1', 'Arrow 2']} titleVariant='arrow'>
                  <div>타이틀에 화살표가 표시됩니다.</div>
                  <div>titleVariant="arrow"</div>
                </Accordion>
              </div>
              <div>
                <h3>titleVariant: plus</h3>
                <Accordion titles={['Plus 1', 'Plus 2']} titleVariant='plus'>
                  <div>타이틀에 + 아이콘이 표시됩니다.</div>
                  <div>titleVariant="plus"</div>
                </Accordion>
              </div>
              {/* size: sm, md, lg */}
              <div>
                <h3>size: sm</h3>
                <Accordion titles={['Small 1', 'Small 2']} size='sm'>
                  <div>작은 사이즈의 아코디언입니다.</div>
                  <div>size="sm"</div>
                </Accordion>
              </div>
              <div>
                <h3>size: lg</h3>
                <Accordion titles={['Large 1', 'Large 2']} size='lg'>
                  <div>큰 사이즈의 아코디언입니다.</div>
                  <div>size="lg"</div>
                </Accordion>
              </div>
              {/* color, selectColor */}
              <div>
                <h3>color, selectColor 커스텀</h3>
                <Accordion titles={['Custom 1', 'Custom 2']} color='#B91C1C' selectColor='#F59E0B'>
                  <div>타이틀 색상과 선택 색상을 커스텀할 수 있습니다.</div>
                  <div>color="#B91C1C", selectColor="#F59E0B"</div>
                </Accordion>
              </div>
            </div>
          </section>
        )}
        {/* Autocomplete 예제 접기/펼치기 */}
        <Button
          content={openAutocomplete ? '▲ Autocomplete 예제 접기' : '▼ Autocomplete 예제 펼치기'}
          onClick={() => setOpenAutocomplete((v) => !v)}
          variant='outline'
        />
        {openAutocomplete && (
          <section>
            <h2>Autocomplete Example</h2>
            <div style={{ maxWidth: 400 }}>
              <Autocomplete
                suggestions={acFiltered}
                onSearch={setAcQuery}
                onSelect={setAcValue}
                placeholder='과일을 입력하세요...'
              />
              <div style={{ marginTop: 12, color: '#888' }}>
                {acValue && `선택된 값: ${acValue}`}
              </div>
            </div>
          </section>
        )}
        {/* Checkbox 예제 접기/펼치기 */}
        <Button
          content={openCheckbox ? '▲ Checkbox 예제 접기' : '▼ Checkbox 예제 펼치기'}
          onClick={() => setOpenCheckbox((v) => !v)}
          variant='outline'
        />
        {openCheckbox && (
          <section>
            <h2>Checkbox Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Checkbox label='기본 체크박스' />
              <Checkbox label='체크됨' checked />
              <Checkbox label='Small' size='sm' />
              <Checkbox label='Large' size='lg' />
              <Checkbox
                label='커스텀 onChange'
                onChange={(checked) => alert(`체크 상태: ${checked}`)}
              />
              <Checkbox label='비활성화' disabled />
              <Checkbox label='비활성화+체크됨' checked disabled />
            </div>
          </section>
        )}
        {/* Divider 예제 접기/펼치기 */}
        <Button
          content={openDivider ? '▲ Divider 예제 접기' : '▼ Divider 예제 펼치기'}
          onClick={() => setOpenDivider((v) => !v)}
          variant='outline'
        />
        {openDivider && (
          <section>
            <h2>Divider Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <h4>기본 Divider</h4>
                <Divider />
              </div>
              <div>
                <h4>Strong Divider</h4>
                <Divider color='strong' thickness='strong' />
              </div>
              <div>
                <h4>Subtle Divider</h4>
                <Divider color='subtle' thickness='subtle' />
              </div>
              <div>
                <h4>Inset Divider</h4>
                <Divider type='inset' />
              </div>
              <div>
                <h4>Vertical Divider</h4>
                <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
                  <span>Left</span>
                  <Divider orientation='vertical' verticalHeight={40} />
                  <span>Right</span>
                </div>
              </div>
              <div>
                <h4>Children + Middle</h4>
                <Divider type='middle'>Divider Text</Divider>
              </div>
            </div>
          </section>
        )}
        {/* FloatButton 예제 접기/펼치기 */}
        <Button
          content={openFloatButton ? '▲ FloatButton 예제 접기' : '▼ FloatButton 예제 펼치기'}
          onClick={() => setOpenFloatButton((v) => !v)}
          variant='outline'
        />
        {openFloatButton && (
          <section>
            <h2>FloatButton Examples</h2>
            <div style={{ position: 'relative', minHeight: 200 }}>
              <FloatButton
                icon={<span style={{ fontSize: 24 }}>+</span>}
                onClick={() => alert('메인 플로팅 버튼 클릭!')}
              />
              <FloatButton
                icon={<span style={{ fontSize: 24 }}>☰</span>}
                position='bottom-left'
                size='lg'
                onClick={() => alert('왼쪽 플로팅 버튼 클릭!')}
              />
              <FloatButton
                icon={<span style={{ fontSize: 20 }}>★</span>}
                position='top-right'
                size='sm'
                onClick={() => alert('오른쪽 위 플로팅 버튼 클릭!')}
              />
              <FloatButton
                icon={<span style={{ fontSize: 20 }}>≡</span>}
                position='top-left'
                size='md'
              >
                <FloatButtonItem onClick={() => alert('서브1')}>서브1</FloatButtonItem>
                <FloatButtonItem onClick={() => alert('서브2')}>서브2</FloatButtonItem>
              </FloatButton>
            </div>
          </section>
        )}
        {/* Input 예제 접기/펼치기 */}
        <Button
          content={openInput ? '▲ Input 예제 접기' : '▼ Input 예제 펼치기'}
          onClick={() => setOpenInput((v) => !v)}
          variant='outline'
        />
        {openInput && (
          <section>
            <h2>Input Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 4 }}>기본</div>
                <Input value={inputValue} onChange={setInputValue} placeholder='기본 입력' />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Disabled</div>
                <Input
                  value={inputValue2}
                  onChange={setInputValue2}
                  placeholder='비활성화'
                  disabled
                />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Error</div>
                <Input
                  value={inputValue3}
                  onChange={setInputValue3}
                  placeholder='에러 상태'
                  error
                />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Underlined</div>
                <Input
                  value={inputValue}
                  onChange={setInputValue}
                  placeholder='언더라인'
                  variant='underlined'
                />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Gray</div>
                <Input
                  value={inputValue}
                  onChange={setInputValue}
                  placeholder='회색'
                  variant='gray'
                />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Small</div>
                <Input
                  value={inputValue}
                  onChange={setInputValue}
                  placeholder='작은 입력'
                  size='sm'
                />
              </div>
              <div>
                <div style={{ marginBottom: 4 }}>Large</div>
                <Input
                  value={inputValue}
                  onChange={setInputValue}
                  placeholder='큰 입력'
                  size='lg'
                />
              </div>
            </div>
          </section>
        )}

        {/* Pagination 예제 접기/펼치기 */}
        <Button
          content={openPagination ? '▲ Pagination 예제 접기' : '▼ Pagination 예제 펼치기'}
          onClick={() => setOpenPagination((v) => !v)}
          variant='outline'
        />
        {openPagination && (
          <section>
            <h2>Pagination Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
              <div>
                <div style={{ marginBottom: 8 }}>기본 Pagination (10페이지)</div>
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  currentPage={paginationPage}
                  onPageChange={setPaginationPage}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>Compact Pagination (20페이지)</div>
                <Pagination
                  variant='compact'
                  totalItems={200}
                  itemsPerPage={10}
                  currentPage={paginationPage2}
                  onPageChange={setPaginationPage2}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>페이지 수가 적은 경우</div>
                <Pagination
                  totalItems={30}
                  itemsPerPage={10}
                  currentPage={1}
                  onPageChange={() => {}}
                />
              </div>
              <div>
                <div style={{ marginBottom: 8 }}>페이지 수가 많은 경우 (50페이지)</div>
                <Pagination
                  totalItems={500}
                  itemsPerPage={10}
                  currentPage={10}
                  onPageChange={() => {}}
                />
              </div>
            </div>
          </section>
        )}
        {/* List 예제 접기/펼치기 */}
        <Button
          content={openList ? '▲ List 예제 접기' : '▼ List 예제 펼치기'}
          onClick={() => setOpenList((v) => !v)}
          variant='outline'
        />
        {openList && (
          <section>
            <h2>List Examples</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* 기본 List */}
              <div>
                <div style={{ marginBottom: 8 }}>기본 List</div>
                <List>
                  <div style={{ padding: '12px 16px' }}>List Item 1</div>
                  <div style={{ padding: '12px 16px' }}>List Item 2</div>
                  <div style={{ padding: '12px 16px' }}>List Item 3</div>
                </List>
              </div>

              {/* Underline Variant */}
              <div>
                <div style={{ marginBottom: 8 }}>Underline Variant</div>
                <List variant='underline'>
                  <div style={{ padding: '12px 16px' }}>Item with underline</div>
                  <div style={{ padding: '12px 16px' }}>Another item</div>
                  <div style={{ padding: '12px 16px' }}>Last item</div>
                </List>
              </div>

              {/* List with Title */}
              <div>
                <div style={{ marginBottom: 8 }}>List with Title</div>
                <List title='My List'>
                  <div style={{ padding: '12px 16px' }}>📝 First item</div>
                  <div style={{ padding: '12px 16px' }}>📝 Second item</div>
                  <div style={{ padding: '12px 16px' }}>📝 Third item</div>
                </List>
              </div>

              {/* Selectable List */}
              <div>
                <div style={{ marginBottom: 8 }}>Selectable List (클릭해보세요)</div>
                <List selected variant='underline'>
                  <div style={{ padding: '12px 16px' }}>🔘 Option 1</div>
                  <div style={{ padding: '12px 16px' }}>🔘 Option 2</div>
                  <div style={{ padding: '12px 16px' }}>🔘 Option 3</div>
                  <div style={{ padding: '12px 16px' }}>🔘 Option 4</div>
                </List>
              </div>

              {/* List with onClick */}
              <div>
                <div style={{ marginBottom: 8 }}>List with onClick Handler</div>
                <List selected selectedIndex={0}>
                  <div style={{ padding: '12px 16px' }} onClick={() => alert('Item 1 clicked!')}>
                    ⚡ Click me!
                  </div>
                  <div style={{ padding: '12px 16px' }} onClick={() => alert('Item 2 clicked!')}>
                    ⚡ Or me!
                  </div>
                  <div style={{ padding: '12px 16px' }} onClick={() => alert('Item 3 clicked!')}>
                    ⚡ Or even me!
                  </div>
                </List>
              </div>

              {/* Complex List Items */}
              <div>
                <div style={{ marginBottom: 8 }}>Complex List Items</div>
                <List variant='underline' selected>
                  <div
                    style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <Avatar type='text' alt='JD' size='sm' />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>John Doe</div>
                      <div style={{ fontSize: 12, color: '#666' }}>john@example.com</div>
                    </div>
                  </div>
                  <div
                    style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <Avatar type='text' alt='JS' size='sm' backgroundColor='#F59E0B' />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>Jane Smith</div>
                      <div style={{ fontSize: 12, color: '#666' }}>jane@example.com</div>
                    </div>
                  </div>
                  <div
                    style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <Avatar type='text' alt='BJ' size='sm' backgroundColor='#22C55E' />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>Bob Johnson</div>
                      <div style={{ fontSize: 12, color: '#666' }}>bob@example.com</div>
                    </div>
                  </div>
                </List>
              </div>

              <div style={{ color: '#888', fontSize: 12 }}>
                ✓ variant='underline'로 구분선 추가
                <br />
                ✓ selected prop으로 선택 가능한 리스트 생성
                <br />
                ✓ selectedIndex로 초기 선택 항목 지정
                <br />✓ 각 아이템에 onClick 핸들러 추가 가능
              </div>
            </div>
          </section>
        )}
      </div>
    </ThemeProvider>
  );
}
