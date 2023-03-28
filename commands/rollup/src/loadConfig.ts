import { rollup, type MergedRollupOptions } from 'rollup';
import { loadConfigFile } from 'rollup/loadConfigFile';
import path from 'node:path';
import { existsSync } from 'node:fs';

import defaultConfig from './rollup.config.js';

export const loadConfig = async (p?: string): Promise<MergedRollupOptions[]> => {
  if (!p) {
    const opt = defaultConfig as MergedRollupOptions;
    return [opt];
  } else {
    const configFile = path.resolve(p);
    if (!existsSync(configFile)) {
      throw new Error(`Config file ${configFile} does not exist`);
    }
    const { options, warnings } = await loadConfigFile(configFile, {
      format: "es",
    });

    // "warnings" wraps the default `onwarn` handler passed by the CLI.
    // This prints all warnings up to this point:
    console.log(`We currently have ${warnings.count} warnings`);

    // This prints all deferred warnings
    warnings.flush();

    return options;
  }
};
