const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: `${commonPaths.jsFolder}/[name].js`,
    path: commonPaths.outputPath,
    publicPath: commonPaths.publicPath
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: `${commonPaths.cssFileName}`,
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // JS | JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // SCSS
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
            outputPath: commonPaths.imagesFolder,
          }
        }
      },
      {
        test: /\.(gif|png|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: '[name].[ext]',
              outputPath: commonPaths.imagesFolder,
            }
          }
        ]
      },
      // {
      //   test: /\.(woff2|woff|ttf|woff|eot)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         outputPath: commonPaths.fontsFolder,
      //         name: `${commonPaths.fontsFolder}/[name].[ext]`,
      //       },
      //     },
      //   ],
      // },
      
      // // WOFF Font
      // {
      //   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: 'application/font-woff'
      //     }
      //   }
      // },
      // // WOFF2 Font
      // {
      //   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: 'application/font-woff'
      //     }
      //   }
      // },
      // // TTF Font
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: 'application/octet-stream'
      //     }
      //   }
      // },
      // // OTF Font
      // {
      //   test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       mimetype: 'application/octet-stream'
      //     }
      //   }
      // },
      // // EOT Font
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   use: 'file-loader'
      // },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`
    }),
  ],
};
