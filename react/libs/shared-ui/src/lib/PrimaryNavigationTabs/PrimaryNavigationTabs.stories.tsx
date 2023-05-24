import SiteLogoSmall from '../../assets/SiteLogoSmall.png';
import type { Meta, StoryFn } from '@storybook/react';
import { PrimaryNavigationTabs } from './PrimaryNavigationTabs';
import withStoryBookRouter from '../../../.storybook/decorators/StoryRouter';

const Story: Meta<typeof PrimaryNavigationTabs> = {
  component: PrimaryNavigationTabs,
  title: 'PrimaryNavigationTabs',
  decorators: [withStoryBookRouter],
  parameters: {
    layout: 'fullscreen',
    storyBookRouter: {
      displayPath: true,
      route: '/*',
      activeURL: '/home',
    },
  },
};

const STORY_NAV_ITEMS = [
  { handle: 'Home', path: 'home' },
  { handle: 'FirstLink', path: 'firstlink' },
  { handle: 'SecondLink', path: 'secondlink' },
];

export default Story;

type PrimaryNavigationTabsStory = StoryFn<typeof PrimaryNavigationTabs>

export const PrimaryNavigationTabsStory = {
  args: {
    navItems: STORY_NAV_ITEMS,
    logo: SiteLogoSmall,
    logoTitle: 'Logo Title',
    appearance: 'transparent',
    disabled: false,
    size: 'small',
    vertical: false,
    defaultSelectedValue: 'home',
  },
};
