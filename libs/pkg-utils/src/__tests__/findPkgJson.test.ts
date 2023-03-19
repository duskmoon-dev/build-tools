import { isExportDeclaration } from "typescript";
import { findPkgJson } from "../findPkgJson";

test('find package.json', async () => {

  const pkg = await findPkgJson();
  expect(pkg?.package.name).toEqual('@duskmoon-dev/pkg-utils');
});
