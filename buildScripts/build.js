/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


// Specifies to babel that we are transpiling for production
process.env.NODE_ENV;

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occured. Stop here.
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generating following warnings: '));
    return jsonStats.warnings.map(warning => console.log(chalk.red(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to /dist'));

  return 0;
});
