import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { findPkgJson } from "../findPkgJson";

const __dirname = dirname(fileURLToPath(import.meta.url));

test("find package.json", async () => {
  const pkg = await findPkgJson(__dirname);
  expect(pkg?.package.name).toEqual("@duskmoon-dev/pkg-utils");
});
