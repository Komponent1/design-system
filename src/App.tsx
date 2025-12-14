import { Tab } from '../lib/tab/tab';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Demo</h1>

      <section style={{ marginTop: 24 }}>
        <h2>Tab Navigation Examples</h2>

        <div style={{ marginBottom: 48 }}>
          <h3>Variant: line</h3>
          <Tab variant='line' tabs={['Home', 'Profile', 'Settings', 'Contact']} defaultIndex={0}>
            <div>
              <h4>Home Content</h4>
              <p>Welcome to the home page. This is the default tab content.</p>
            </div>
            <div>
              <h4>Profile Content</h4>
              <p>View and edit your profile information here.</p>
            </div>
            <div>
              <h4>Settings Content</h4>
              <p>Manage your account settings and preferences.</p>
            </div>
            <div>
              <h4>Contact Content</h4>
              <p>Get in touch with us through various channels.</p>
            </div>
          </Tab>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Variant: box</h3>
          <Tab variant='box' tabs={['Dashboard', 'Analytics', 'Reports']} defaultIndex={1}>
            <div>
              <h4>Dashboard</h4>
              <p>Overview of your key metrics and activities.</p>
            </div>
            <div>
              <h4>Analytics</h4>
              <p>Detailed analytics and insights about your data.</p>
            </div>
            <div>
              <h4>Reports</h4>
              <p>Generate and download various reports.</p>
            </div>
          </Tab>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Variant: pill</h3>
          <Tab variant='pill' tabs={['Overview', 'Details', 'History']} defaultIndex={0}>
            <div>
              <h4>Overview</h4>
              <p>Quick summary of important information.</p>
            </div>
            <div>
              <h4>Details</h4>
              <p>Comprehensive details and specifications.</p>
            </div>
            <div>
              <h4>History</h4>
              <p>View historical data and changes over time.</p>
            </div>
          </Tab>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h3>Variant: toggleButton</h3>
          <Tab variant='segment' tabs={['Overview', 'Details', 'History']} defaultIndex={0}>
            <div>
              <h4>Overview</h4>
              <p>Quick summary of important information.</p>
            </div>
            <div>
              <h4>Details</h4>
              <p>Comprehensive details and specifications.</p>
            </div>
            <div>
              <h4>History</h4>
              <p>View historical data and changes over time.</p>
            </div>
          </Tab>
        </div>
      </section>
    </div>
  );
}

export default App;
