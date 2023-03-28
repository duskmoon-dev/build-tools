import { rollup, type RollupOptions, type OutputOptions } from "rollup";
import { generateOutputs } from "./generateOutputs.js";

export const build = async (options: RollupOptions) => {
  let bundle;
  let buildFailed = false;
  try {
    // create a bundle
    bundle = await rollup(options);

    // an array of file names this bundle depends on
    console.log(bundle.watchFiles);

    const output = options.output ?? [];
    await generateOutputs(bundle, output);
  } catch (error) {
    buildFailed = true;
    // do some error reporting
    console.error(error);
  }
  if (bundle) {
    // closes the bundle
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
};
