import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig } from '@storybook/react-vite';

import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...(rootMain.addons || [])],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  viteFinal: async (config: any) => {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
};

module.exports = config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
