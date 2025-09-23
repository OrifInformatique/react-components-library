// .storybook/main.js
import { mergeConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  framework: "@storybook/react-vite",
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions"
  ],
  docs: { autodocs: true },

  async viteFinal(config) {
    // S'assurer que esbuild traite les fichiers .js comme JSX
    config.esbuild = {
      loader: "jsx",
      ...(config.esbuild || {})
    };

    // Supprimer un éventuel plugin react déjà présent
    const withoutReact =
      (config.plugins ?? []).filter(
        (p) => !(p?.name?.includes("vite:react"))
      ) ?? [];

    return mergeConfig(
      { ...config, plugins: withoutReact },
      {
        plugins: [
          react({
            jsxRuntime: "automatic",
            include: [/\.(j|t)sx?$/]
          })
        ]
      }
    );
  }
};
