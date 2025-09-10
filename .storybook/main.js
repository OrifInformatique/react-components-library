// .storybook/main.js
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  stories: ['../src/**/*.mdx','../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-essentials','@storybook/addon-a11y','@storybook/addon-interactions'],
  docs: { autodocs: true },
  viteFinal: (config) => {
    config.esbuild ||= {};
    config.esbuild.loader = { '.js': 'jsx', ...(config.esbuild.loader || {}) };
    return config;
  },
  async viteFinal(config) {
    // Remove existing vite:react plugin if present
    const withoutReact =
      (config.plugins ?? []).filter((p) => !(p?.name?.includes('vite:react'))) ?? [];

    return mergeConfig(
      { ...config, plugins: withoutReact },
      { plugins: [react({ jsxRuntime: 'automatic', include: [/\.(j|t)sx?$/] })] }
    );
  },
};
