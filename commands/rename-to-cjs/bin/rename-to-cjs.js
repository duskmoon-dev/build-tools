import { run } from '../dist/esm/index.js';

console.log(`rename files in ${process.argv.slice(2)}`);

run(process.argv.slice(2));
