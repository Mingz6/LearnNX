import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { makeDecorator } from '@storybook/addons';
import { Addon_LegacyStoryFn } from '@storybook/types';
import _ from 'lodash-es';

// This wrapper is necessary because:
// 1. components using react-router-dom must be wrapped in a Router
// 2. the popular `storybook-addon-react-router-v6` does not support v7.0beta
// https://github.com/JesusTheHun/storybook-addon-react-router-v6/issues/18
// this is a basic implementation - more functionality can be added - Doug.

/**
 * @example
 * ```ts
// RegiComponent.stories.tsx
export const Primary: StoryObj<typeof RegiComponent> = {
  decorators: [withStoryBookRouter],
  parameters: { // Optional
    storyBookRouter: {
      route: '/guitars/:guitar_type',
      activeURL: '/guitars/acoustic',
      displayPath: 'true'
    },
  },
};
```
 */
const withStoryBookRouter = makeDecorator({
  name: 'withStoryBookRouter',
  parameterName: 'storyBookRouter',
  wrapper: (story: Addon_LegacyStoryFn<any>, context, { parameters = {} }: { parameters: RouterOptions }) => {
    const { route = '/', activeURL = '/', displayPath = false, ...rest } = parameters;

    if (Object.keys(rest).length > 0) {
      throw new Error('Sorry! only supported parameters are `activeURL`, `route` and `displayPath`');
    }

    if (!_.isString(route) || !_.isString(activeURL) || !_.isBoolean(displayPath)) {
      throw new Error(`route and activeURL must be strings, displayPath must be a boolean `);
    }

    return (
      // Why MemoryRouter? https://reactrouter.com/en/main/routers/picking-a-router#testing
      <MemoryRouter initialEntries={[activeURL]}>
        <StoryRouter activeURL={activeURL} route={route} element={story(context)} displayPath={displayPath} />
      </MemoryRouter>
    );
  },
});

export type RouterOptions = {
  /** actual path component router will initially point to */
  activeURL?: string;
  /** route in imaginary router, can contain parametric endpoints  */
  route?: string;
  /** display current path in the storybook canvas */
  displayPath?: boolean;
};

type StoryRouterProps = RouterOptions & {
  /** Component under test */
  element: React.ReactNode;
};

const StoryRouter = ({ element, route, displayPath }: StoryRouterProps) => {
  const location = useLocation();
  return (
    <>
      {displayPath && (
        <code style={{ color: 'var(--colorNeutralForeground1)' }}>
          {location.pathname}
          {location.search}
        </code>
      )}
      <Routes>
        <Route path={route} element={element}  />
      </Routes>
    </>
  );
};

export default withStoryBookRouter;
