import { ESLint } from "eslint";

export const run = async (files = "src/**/*.js", opts: any) => {
    // 1. Create an instance with the `fix` option.
    const eslint = new ESLint({ fix: opts.fix === 'true' });

    // 2. Lint files. This doesn't modify target files.
    const results = await eslint.lintFiles([files]);

    if (opts.fix === 'true') {
      // 3. Modify the files with the fixed code.
      await ESLint.outputFixes(results);
    }
    // 4. Format the results.
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    // 5. Output it.
    console.log(resultText);

};
