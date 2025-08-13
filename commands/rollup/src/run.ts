import { build } from "./build.js";

import { loadConfig } from "./loadConfig.js";

export const run = async () => {
  const options = await loadConfig();

  await Promise.all(options.map((opt) => build(opt)));
};
