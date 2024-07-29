import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core:{
    builder: '@storybook/builder-vite'
  },
  viteFinal: (config) => {
    config.css = {
      ...config.css,
      preprocessorOptions: {
        scss: {
          //additionalData:`@import "src/styles/variables.css";`
        },
      },
    }
    return config;
  },
};
export default config;
