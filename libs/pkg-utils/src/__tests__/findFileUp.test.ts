import { findFileUp, findFileUpMultiple } from "../findFileUp";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

test("find file up", async () => {
  const file = await findFileUp("package.json", { cwd: __dirname });
  expect(file).toMatch(/package.json$/);
});

test("find file up multiple", async () => {
  const files = await findFileUpMultiple("package.json", { cwd: __dirname });
  expect(files.length).toBeGreaterThan(1);
});
