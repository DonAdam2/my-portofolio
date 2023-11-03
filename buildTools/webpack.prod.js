process.env.NODE_ENV = 'production';

// the following 2 lines is to merge common webpack configurations with this file
const { merge } = require('webpack-merge'),
  common = require('./webpack.common.js'),
  //plugins
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  TerserJSPlugin = require('terser-webpack-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  { InjectManifest } = require('workbox-webpack-plugin'),
  WebpackPwaManifest = require('webpack-pwa-manifest'),
  CopyPlugin = require('copy-webpack-plugin'),
  //constants
  { cssSubDirectory, metaInfo } = require('./constants'),
  { publicDirPath, srcPath } = require('./paths'),
  //helpers
  { getDirectoryDirectories, getDirectoryFiles } = require('./helpers');

module.exports = (env, options) => {
  const containedDirectoriesInPublicDirectory = getDirectoryDirectories('public'),
    containedDirectoriesInAssetsDirectory = getDirectoryDirectories('public/assets'),
    containedFilesInPublicDirectory = getDirectoryFiles('public'),
    containedFilesInAssetsDirectory = getDirectoryFiles('public/assets'),
    inPublicOtherDirectories = containedDirectoriesInPublicDirectory.filter(
      (el) => el !== 'assets'
    ),
    inAssetsOtherDirectories = containedDirectoriesInAssetsDirectory.filter(
      (el) => el !== 'fonts' && el !== 'images'
    ),
    inPublicOtherFiles = containedFilesInPublicDirectory.filter((el) => el !== 'index.html');

  return merge(common(env, options), {
    performance: {
      hints: false,
      maxEntrypointSize: 512 * 1024,
      maxAssetSize: 512 * 1024,
    },
    optimization: {
      minimize: true,
      // minify the bundled js files
      minimizer: [
        // minify the bundled js files (note: it's used by default in webpack5, but we are modifying the options)
        new TerserJSPlugin({
          extractComments: false,
          parallel: true,
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code
              inline: 2,
              drop_console: true,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              ascii_only: true,
            },
          },
        }),
        //optimize and minify CSS
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      // Removes/cleans build folders and unused assets when rebuilding
      new CleanWebpackPlugin(),
      // used to extract styles into separated stylesheet
      new MiniCssExtractPlugin({
        // used for main styles file
        filename: cssSubDirectory + '[name].[contenthash:8].css',
        // used for the lazy loaded component
        chunkFilename: cssSubDirectory + '[id].[contenthash:8].css',
      }),
      new CopyPlugin({
        patterns: [
          ...(inPublicOtherDirectories.length > 0 ||
          inAssetsOtherDirectories.length > 0 ||
          inPublicOtherFiles.length > 0 ||
          containedFilesInAssetsDirectory.length > 0
            ? [
                {
                  from: `public`,
                  globOptions: {
                    ignore: [
                      //ignore __index.html__ file because it's injected using __HtmlWebpackPlugin__
                      '**/index.html',
                      //ignore images and fonts directory in public directory because it's handled using __asset/resource__ module
                      '**/public/assets/images/**/*',
                      '**/public/assets/fonts/**/*',
                    ],
                  },
                  to: '',
                },
              ]
            : []),
          //copy redirects file from redirect to dist (netlify)
          { from: 'redirect', to: '' },
        ],
      }),
      new WebpackPwaManifest({
        filename: 'manifest.webmanifest',
        background_color: '#000000',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        name: 'Adam Portfolio',
        short_name: metaInfo.title,
        description: metaInfo.description,
        id: '/',
        categories: ['technology', 'web'],
        icons: [
          {
            src: `${publicDirPath}/assets/images/pwa/icon-192x192.png`,
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
            destination: 'assets/images/pwa',
            ios: true,
          },
          {
            src: `${publicDirPath}/assets/images/pwa/icon-256x256.png`,
            sizes: '256x256',
            type: 'image/png',
            destination: 'assets/images/pwa',
          },
          {
            src: `${publicDirPath}/assets/images/pwa/icon-384x384.png`,
            sizes: '384x384',
            type: 'image/png',
            destination: 'assets/images/pwa',
          },
          {
            src: `${publicDirPath}/assets/images/pwa/icon-512x512.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
            destination: 'assets/images/pwa',
          },
        ],
      }),
      new InjectManifest({
        //this is the source of your service worker setup
        swSrc: `${srcPath}/serviceWorker/swSource.js`,
        //this is the output name of your service worker file
        swDest: 'serviceWorker.js',
        //exclude netlify _redirects file
        exclude: ['_redirects'],
      }),
    ],
  });
};
