import { build } from "./build.js";

import { loadConfig } from "./loadConfig.js";

export const run = async () => {
  const options = await loadConfig();

  for (let opt of options) {
    await build(opt);
  }
};
