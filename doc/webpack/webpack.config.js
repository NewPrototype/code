const MyPlugin=require('./plugin')
module.exports = {
    entry: {
      index: './index.js'
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: [
            './loader/toUpperCase.js',
            './loader/replace.js',
          ]
        }
      ]
    },
    plugins: [
        new MyPlugin({param: 'MyPlugin'})
      ],
  }
