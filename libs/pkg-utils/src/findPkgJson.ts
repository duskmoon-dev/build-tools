import { promises as fsPromises } from 'node:fs';
import { findFileUp } from "./findFileUp";

export const findPkgJson = async (d?: string) => {
  const p = d ?? process.cwd();
  const file = await findFileUp('package.json', { cwd: p });
  if (file) {
    const pkgTxt = await fsPromises.readFile(file, { encoding: 'utf8' });
    return {
      package: JSON.parse(pkgTxt),
      path: file,
    };
  }
  return null;
}
