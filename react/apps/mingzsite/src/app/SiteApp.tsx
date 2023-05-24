
import { RouterProvider } from 'react-router-dom';
import { SiteRoute } from './SiteRoutes';

import NxWelcome from './nx-welcome';
import { FC } from 'react';

const SiteApp: FC = () => {
  return (
    <>
      <RouterProvider router={SiteRoute} />
      <NxWelcome title="mingzsite" />
      <div />
    </>
  );
};

export default SiteApp;
