import { FirstPage, SecondPage, Home } from '../pages';
import SiteSearch from '../pages/SiteSearch/SiteSearch';
import { RouteObjectWithHandleAndPath, SiteNavRoutes } from './SiteNavRoutes';

export const TopNavRoutes: RouteObjectWithHandleAndPath[] = [
  {
    handle: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    handle: 'FirstPage',
    path: '/firstpage',
    element: <FirstPage />,
  },
  {
    handle: 'SecondPage',
    path: '/secondpage',
    element: <SecondPage />,
  },
];
