import vueConfig from "../docs_react/config.json";
import baseConfig from "./baseConfig";

let config: any = {};

config = {
  ...vueConfig,
  ...baseConfig,
};

export const {
  nav,
  docs,
  version,
  demoUrl,
  homePage,
  versions,
  header,
  repository,
} = config;
