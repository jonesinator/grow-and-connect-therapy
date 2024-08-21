import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [".dependency-cruiser.js"],
  project: ["src/**/*"],
  ignoreDependencies: [
    "next-sitemap",
    "sharp",
    "@types/mdx",
    "@heroicons/react",
  ],
  ignore: ["src/mdx-components.tsx"],
};

export default config;
