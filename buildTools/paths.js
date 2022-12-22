const path = require('path'),
  projectPath = `${path.join(__dirname)}/../`,
  {
    outputDirectory,
    rootDirectory,
    publicDirectory,
    environmentsDirectory,
  } = require('./constants');

module.exports = {
  projectPath,
  src: path.join(projectPath, rootDirectory),
  public: path.join(projectPath, publicDirectory),
  outputSrc: path.resolve(projectPath, outputDirectory),
  environments: path.resolve(projectPath, environmentsDirectory),
};
