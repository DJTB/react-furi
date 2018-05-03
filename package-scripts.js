/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
const npsUtils = require('nps-utils');

const concurrent = npsUtils.concurrent;
const rimraf = npsUtils.rimraf;
const series = npsUtils.series;

module.exports = {
  scripts: {
    commit: {
      description: 'Commit changes using commitizen',
      script: 'git-cz',
    },
    contributors: {
      add: {
        description: 'When new people contribute to the project, run this',
        script: 'all-contributors add',
      },
      generate: {
        description: 'Update the badge and contributors table',
        script: 'all-contributors generate',
      },
    },
    build: {
      default: {
        description: 'Delete the dist directory and run babel to build the files',
        script: series(rimraf('dist'), 'babel src -d dist --copy-files'),
      },
      watch: {
        description: 'Watch and rebuild dist',
        script: 'babel src -w -d dist --copy-files',
      },
    },
    dev: {
      description: 'Watch build files and run dev server',
      script: concurrent.nps('build.watch', 'docs'),
    },
    docs: {
      default: {
        description: 'Run docs dev server',
        script: 'webpack-dev-server --mode development',
      },
      prod: {
        description: 'Build docs',
        script: 'webpack --mode production',
      },
    },
    lint: {
      description: 'lint the entire project with eslint',
      script: 'eslint .',
    },
    test: {
      default: {
        description: 'Collect code coverage',
        script: 'jest --coverage',
      },
      watch: {
        description: 'Run test in interactive watch mode',
        script: 'jest --watch',
      },
    },
    validate: {
      description: 'Run validation to make sure everything is up to standard',
      script: concurrent.nps('lint', 'build', 'test'),
    },
  },
  options: {
    logLevel: 'warn',
  },
};
