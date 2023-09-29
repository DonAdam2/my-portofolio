const fs = require('fs'),
  path = require('path');

//link of our app directory
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  //git directories list of the given directory
  getDirectoryDirectories: (dir) =>
    fs.readdirSync(dir).filter(function (file) {
      return fs.statSync(dir + '/' + file).isDirectory();
    }),
  //get files list of the given directory
  getDirectoryFiles: (dir) =>
    fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name),
  //get required link
  resolveApp: (relativePath) => path.resolve(appDirectory, relativePath),
};
