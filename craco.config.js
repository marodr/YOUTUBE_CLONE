const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new Dotenv(),
    ],
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@data': path.join(path.resolve(__dirname, './src/data')),
      '@navigation': path.join(
        path.resolve(__dirname, './src/components/navigation')
      ),
      '@themes': path.join(path.resolve(__dirname, './src/themes')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@styles': path.join(path.resolve(__dirname, './src/styles')),
    },
  },
};
