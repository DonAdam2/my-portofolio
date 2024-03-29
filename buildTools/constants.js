const dayjs = require('dayjs');
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
    //displayed in search engines at the top of URL
    siteName: 'Adam Morsi',
    title: 'Adam Morsi Portfolio',
    description: `Hello, I'm adam, I'm a versatile Software Engineer with ${dayjs().diff(
      dayjs('2017-06-01'),
      'year'
    )}+ years of experience designing, developing, and managing complex sites, internal frameworks.`,
    url: 'https://adam-morsi.com',
    keywords: 'Adam Morsi, portfolio, software developer, frontend developer',
    twitterCardType: 'summary_large_image', //summary - summary_large_image - app
  },
};
