// import { Tab, TabList, TabListProps } from '@fluentui/react-components';
import { NavLink } from 'react-router-dom';
import './PrimaryNavigationTabs.scss';

export interface PrimaryNavigationTabsProps {
  navItems: Array<{ handle: string; path: string }>;
  logo: string;
  logoTitle: string;
}

export const PrimaryNavigationTabs = (props: Partial<PrimaryNavigationTabsProps>) => {
  const { navItems, logo, logoTitle } = props;
  return (
    <>
      <div className="primary-navigation-tabs">
        <img src={logo} alt={logoTitle} width={30} height={30} />
        <span id={logoTitle} className="logo">
          {logoTitle}
        </span>
        {navItems?.map((route) => (
          <NavLink
            className="tab"
            aria-label={route.path}
            key={route.path}
            to={route.path}
          >
            {route.handle}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default PrimaryNavigationTabs;
