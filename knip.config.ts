import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [".dependency-cruiser.js"],
  project: ["src/**/*"],
  ignoreDependencies: ["sharp", "@types/mdx"],
  ignore: ["src/mdx-components.tsx"],
};

export default config;
