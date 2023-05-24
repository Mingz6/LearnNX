import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from './App';
import { TopNavRoutes } from './TopNavRoutes';

export const SiteRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: TopNavRoutes,
  },
  {
    path: '*',
    element: (
      <h2>
        Beep Boop, 404 not found!
        <span role="img" aria-hidden>
          ⁉️🤖🗺️
        </span>
      </h2>
    ),
  },
];

export const SiteRoute = createBrowserRouter(SiteRoutes);
