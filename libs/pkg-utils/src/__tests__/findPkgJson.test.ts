import { findPkgJson } from "../findPkgJson";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

test("find package.json", async () => {
  const pkg = await findPkgJson(__dirname);
  expect(pkg?.package.name).toEqual("@duskmoon-dev/pkg-utils");
});
