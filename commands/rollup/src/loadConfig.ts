import path from "node:path";
import { existsSync } from "node:fs";
import { type MergedRollupOptions } from "rollup";
import { loadConfigFile } from "rollup/loadConfigFile";

import defaultConfig from "./rollup.config.js";

export const loadConfig = async (
  p?: string,
): Promise<MergedRollupOptions[]> => {
  if (p) {
    const configFile = path.resolve(p);
    if (existsSync(configFile)) {
      const { options, warnings } = await loadConfigFile(configFile, {
        format: "es",
      });

      // "warnings" wraps the default `onwarn` handler passed by the CLI.
      // This prints all warnings up to this point:
      console.log(`We currently have ${warnings.count} warnings`);

      // This prints all deferred warnings
      warnings.flush();

      return options;
    } else {
      throw new Error(`Config file ${configFile} does not exist`);
    }
  } else {
    const opt = defaultConfig as MergedRollupOptions;
    return [opt];
  }
};
