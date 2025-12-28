import { Sidebar } from '../lib';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9fafb' }}>
      {/* 좌측: collapsible (내부 상태로 토글) */}
      <Sidebar variant='collapsible' position='left' width={220} style={{ zIndex: 2 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 18 }}>Collapsible Sidebar</h3>
          <ul style={{ margin: '24px 0 0 0', padding: 0, listStyle: 'none', color: '#374151' }}>
            <li>대시보드</li>
            <li>설정</li>
            <li>사용자 관리</li>
          </ul>
        </div>
      </Sidebar>
      {/* 메인 컨텐츠 */}
      <div style={{ flex: 1, padding: '32px 40px' }}>
        <h1>Sidebar Demo</h1>
        <p>variant와 position에 따라 동작이 달라집니다.</p>
        <ul>
          <li>
            좌측 사이드바: <b>collapsible</b> (사이드바 내부 토글 버튼으로 열고 닫기)
          </li>
          <li>
            우측 사이드바: <b>alwaysOpen</b> (항상 열림)
          </li>
        </ul>
      </div>
      {/* 우측: alwaysOpen */}
      <Sidebar variant='collapsible' position='right' width={180}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16 }}>Always Open</h3>
          <ul style={{ margin: '20px 0 0 0', padding: 0, listStyle: 'none', color: '#374151' }}>
            <li>알림</li>
            <li>메시지</li>
            <li>프로필</li>
          </ul>
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
