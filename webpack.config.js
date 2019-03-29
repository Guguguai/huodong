const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const base = {
  entry: {
    main: './dev/static/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        // use: [
        //   // 注意loader顺序，从右到左
        //   'style-loader', 'css-loader', 'px2rem-loader', 'sass-loader'
        // ]
        // 分离css
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'px2rem-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: [
          // 大于500kb不转base64
          // 'url-loader?limit=500000'
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: '[name].[ext]'
            }
          }, {
            loader: 'image-webpack-loader', // 压缩图片
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      },
      // 处理html内图片问题
      {
        test: /\.html$/,
        use: [
          'html-withimg-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  optimization: {
    // 分离大文件
    // 在入口import的大文件都会被打包到bundle
    splitChunks: {
      chunks: 'initial', // 只对入口文件处理
      cacheGroups: {
        vendor: {
          test: /node_modules\//,
          filename: 'bundle.js',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    // html模板
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      hash: true
    }),
    // 分离css
    new ExtractTextWebpackPlugin('index.css'),
  ]
}
const dev = {}
const pro = {}

Object.assign(dev, base, {
  mode: 'development',
  devtool: 'inline-source-map',
  // 热更新服务器
  devServer: {
    contentBase: './dist',
    // mock数据
    before(app) {
      app.get('/mockdata/:whichmock', (req, res) => {
        // jsonp
        const callback = req.query.callback ? req.query.callback : 'callback'
        res.send(`${callback}(${JSON.stringify(require('./mock/mockdata')[req.params.whichmock])})`)
      })
    }
  }
})
Object.assign(pro, base, {
  mode: 'production',
  plugins: [
    // 生产环境先清理dist
    new CleanWebpackPlugin(['dist']),
    // html模板
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      hash: true
    }),
    // 分离css
    new ExtractTextWebpackPlugin('index.css'),
  ]
})

module.exports = process.env.NODE_ENV === 'development' ? dev : pro