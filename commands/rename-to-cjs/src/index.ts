import { glob } from 'glob';
import { rename } from 'fs/promises';

export const run = async (ipt = '**/*.js') => {
  const jsfiles = await glob(ipt, { ignore: 'node_modules/**' });

  for(const file of jsfiles) {
    const f = file;
    const t = file.replace(/\.js$/, '.cjs');
    // shell color codes
    console.log(`\x1b[32mRenaming\x1b[0m ${f} \x1b[32mto\x1b[0m ${t}`);
    await rename(f, t);
  }
};
