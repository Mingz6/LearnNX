import './App.scss';
import SiteLogo from '../assets/SiteLogo.png';
import { PrimaryNavigationTabs, SharedUi } from '@learnnx/shared-ui';
import { TopNavRoutes } from './TopNavRoutes';
import { Outlet } from 'react-router-dom';

const App = () => {
  // Toggle for theme in the long run
  return (
    <div className="site-app">
      <div className="site-nav">
        <PrimaryNavigationTabs
          logo={SiteLogo}
          logoTitle="Site Title"
          navItems={TopNavRoutes}
        />
      </div>
      <main className="page-wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
