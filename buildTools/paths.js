const { outputDirectory, rootDirectory, publicDirectory } = require('./constants'),
  { resolveApp } = require('./helpers');

module.exports = {
  srcPath: resolveApp(rootDirectory),
  appIndexPath: resolveApp(`${rootDirectory}/index`),
  jsDirectoryPath: resolveApp(`${rootDirectory}/js`),
  stylesDirectoryPath: resolveApp(`${rootDirectory}/scss`),
  publicDirPath: resolveApp(publicDirectory),
  indexHtmlPath: resolveApp(`${publicDirectory}/index.html`),
  outputSrcPath: resolveApp(outputDirectory),
};
