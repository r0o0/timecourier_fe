// @ts-nocheck
import CracoAlias from 'craco-alias';
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

export default {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: 'tsconfig.paths.json',
        unsafeAllowModulesOutsideOfSrc: true,
      },
    },
    {
      plugin: require('craco-babel-loader'),
      options: {
        includes: [resolveApp('../components')],
      },
    },
  ],
};
