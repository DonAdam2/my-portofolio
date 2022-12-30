const protocol = process.env.HTTPS?.trim() === 'true' ? 'https' : 'http';

module.exports = {
  port: 3000,
  protocol,
  devServer: `${protocol}://localhost`,
  rootDirectory: 'src',
  publicDirectory: 'public',
  outputDirectory: 'dist',
  jsSubDirectory: 'js/',
  cssSubDirectory: 'css/',
  isCssModules: false,
  metaInfo: {
    title: 'Adam Morsi Portfolio',
    description: `Hello, I'm adam, I'm a versatile Software Engineer with ${
      new Date(new Date() - new Date('06-01-2017')).getFullYear() - 1970
    }+ years of experience designing, developing, and managing complex sites, internal frameworks.`,
    url: 'https://adam-morsi.com',
    keywords: 'Adam Morsi, portfolio, software developer, frontend developer',
  },
};
