const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const cracoSassResourcesLoader = require('craco-sass-resources-loader')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'api': path.resolve(__dirname, 'src/api'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src',
        }),
      ],
    },
  },
  plugins: [
    // 添加scss全局变量
    {
      plugin: cracoSassResourcesLoader,
      options: {
        resources: [
          path.resolve(__dirname, 'src/styles/variables.scss')
        ],
      },
    },
  ],
}
