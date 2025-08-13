
import { fileURLToPath } from "url";
import path from "path";
import { ESLint } from "eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LintOptions {
  fix: string;
  tsconfigPath?: string;
}

export const run = async (files = "src/**/*.js", opts: LintOptions) => {
  // 1. Create an instance with the `fix` option.
  const eslintOptions: ESLint.Options = {
    fix: opts.fix === "true",
    overrideConfigFile: path.resolve(__dirname, "../../../eslint.config.js"),
    cwd: path.resolve(__dirname, "../../../"),
  };

  if (opts.tsconfigPath) {
    eslintOptions.overrideConfig = {
      languageOptions: {
        parserOptions: {
          project: opts.tsconfigPath,
        },
      },
    };
  }

  const eslint = new ESLint(eslintOptions);

  // 2. Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles([files]);

  if (opts.fix === "true") {
    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);
  }
  // 4. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 5. Output it.
  console.log(resultText);
};
