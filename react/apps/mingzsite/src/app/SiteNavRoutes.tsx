import { RouteObject } from 'react-router-dom';
import SecondPage from '../pages/SecondPage/SecondPage';

export type RouteObjectWithHandleAndPath = RouteObject & {
  handle: string;
  path: string;
};

// *** PLACEHOLDER - replace with real page when it exists ***
const Page = ({ title }: { title: string }) => <h2>{title}</h2>;

export const SiteNavRoutes: RouteObjectWithHandleAndPath[] = [
  {
    index: true,
    handle: 'Details',
    path: '',
    element: <SecondPage />,
  },
];
