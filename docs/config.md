# 配置环境
## Install TypeScript
全局安装
```bash
npm i typescript -g
```
在项目内安装
```bash
npm i typescript --save
```

## Install Webpack
```bash
npm i webpack webpack-cli webpack-dev-server -D
```
在 `package.json` 中的 `script`中添加以下内容
```json
{
  "scripts": {
    "start": "webpack-dev-server --config ./build/webpack.config.js",
    "build": "webpack --config ./build/webpack.config.js"
  }
}
```
`--config` 后跟的是项目中 `webpacak.config.js` 的路径，它是我们用来配置 `webpack` 的文件，写入以下内容：
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: "./src/index.ts", // 入口文件
  output: {
    filename: "main.js" // 打包完成后的输出文件
  },
  resolve: {
    extensions: [ // 自动解析确定的拓展。import 的时候就不需要带后缀名。
      ".ts",
      ".tsx",
      ".js"
    ]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: '8086'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
};
```
我们还需要在项目里安装用到的 `ts-loader` `html-webpack-plugin` `clean-webpack-plugin`
```bash
npm i ts-loader html-webpack-plugin clean-webpack-plugin -D
```

## Install cross-env
```bash
npm i cross-env -D
```
用来给 `package.json` 里的 `script` 添加参数
```json
{
  "script": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"
  }
}
```
这样我们就可以用 `process.env.NODE_ENV` 接受到 `development` 这个值。
在开发中我们一般用 `development` 和 `production` 来针对开发环境和生产环境进行不同配置。
接下来在 `webpack.config.js` 内写入以下内容
```javascript

```
