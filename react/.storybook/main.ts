import type { StorybookConfig } from '@storybook/react-vite';

export const rootMain: StorybookConfig = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-coverage',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
