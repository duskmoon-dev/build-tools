import { Command } from 'commander';
const program = new Command();

program
  .name('dm-cli')
  .description('CLI for @duskmoon-dev')
  .version('1.0.0');

program.command('build')
  .description('build scritps from ./src to ./dist')
  .option('-t, --target <target>', 'output moudle type, for example: es2021, es2022, esnext', 'es2021')
  .option('-m, --module <module>', 'output moudle type, for example: esnext, commonjs', 'esnext')
  .action(async (opts) => {
    const { run } = await import('./tasks/build.js');
    await run(opts);
  });

program.command('storybook <cmd>')
  .description('run storybook command')
  .action(async(cmd, opts) => {
    const { run } = await import('./tasks/storybook.js');
    await run(cmd, opts);
  });

program.parse();
