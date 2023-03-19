import { findFileUp, findFileUpMultiple } from "../findFileUp";

test('find file up', async () => {

  const file = await findFileUp('package.json');
  expect(file).toMatch(/package.json$/);
});

test('find file up multiple', async () => {

  const files = await findFileUpMultiple('package.json');
  expect(files.length).toBeGreaterThan(1);
});
