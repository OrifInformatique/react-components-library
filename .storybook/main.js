// .storybook/main.js
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  stories: ['../src/**/*.mdx','../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react-vite',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  docs: { autodocs: true },
  async viteFinal(config) {
    // 1) forcer le loader JSX pour .js
    config.esbuild ||= {};
    config.esbuild.loader = { '.js': 'jsx', ...(config.esbuild.loader || {}) };

    // 2) supprimer le plugin react existant
    const withoutReact =
      (config.plugins ?? []).filter((p) => !(p?.name?.includes('vite:react'))) ?? [];

    // 3) fusionner avec la config react
    return mergeConfig(
      { ...config, plugins: withoutReact },
      {
        plugins: [
          react({
            jsxRuntime: 'automatic',
            include: [/\.(j|t)sx?$/],
          }),
        ],
      }
    );
  },
};
