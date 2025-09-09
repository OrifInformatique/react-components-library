// .storybook/main.js (ESM)
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],

  viteFinal: async (config) => {
    // 1) S'assurer que le JSX est géré aussi dans les fichiers .js
    //    - ne PAS mettre d’objet à config.esbuild.loader (ça casse).
    config.esbuild = { ...(config.esbuild ?? {}), jsx: 'automatic' };

    // 2) Pour le prébundling esbuild (OK d’avoir un objet ici)
    config.optimizeDeps ??= {};
    config.optimizeDeps.esbuildOptions ??= {};
    config.optimizeDeps.esbuildOptions.loader = {
      '.js': 'jsx',
    };

    // 3) Remplacer le plugin react par défaut pour qu’il inclue aussi .js
    const withoutReact =
      (config.plugins ?? []).filter((p) => !(p?.name?.includes('vite:react'))) ?? [];

    return mergeConfig(
      { ...config, plugins: withoutReact },
      {
        plugins: [
          react({
            jsxRuntime: 'automatic',
            include: [/\.(j|t)sx?$/], // => gère .js, .jsx, .ts, .tsx
          }),
        ],
      }
    );
  },
};
