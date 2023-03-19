import { promises as fsPromises } from "node:fs";
import {
  join as pathJoin,
  dirname,
  resolve as pathResolve,
  parse as pathParse,
} from "node:path";
import { fileURLToPath } from "node:url";

const toPath = (urlOrPath: string | URL | undefined) =>
  urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;

type fileFileUpOptions = {
  cwd?: string;
  stopAt?: string;
  limit?: number;
};

const fileExists = async (f: string) => {
  try {
    await fsPromises.access(f);
    return true;
  } catch (_) {
    return false;
  }
};

const tryFindFile = async (directory: string, name: string) => {
  const parentDir = dirname(directory);
  const f = pathJoin(directory, name);
  const found = await fileExists(f);
  return {
    parentDir,
    found,
    file: f,
  };
};

export const findFileUpMultiple = async (
  name: string,
  options: fileFileUpOptions = {}
) => {
  let directory = pathResolve(toPath(options.cwd) || process.cwd());
  const { root } = pathParse(directory);
  const stopAt = pathResolve(directory, options.stopAt || root);
  const limit = options.limit || Number.POSITIVE_INFINITY;
  let findCount = 0;
  let filesBeFound = [];

  while (true) {
    const { parentDir, found, file } = await tryFindFile(directory, name);
    if (found) {
      findCount += 1;
      filesBeFound.push(file);
      if (limit === findCount) {
        break;
      }
    }
    if (stopAt === directory) {
      break;
    }
    directory = parentDir;
  }
  
  return filesBeFound;
};

export const findFileUp = async ( name: string, options: fileFileUpOptions = {} ) => {
  const result = await findFileUpMultiple(name, { ...options, limit: 1 });

  return result[0] ?? null;
};
