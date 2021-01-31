const path = require('path')
module.exports = {
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8080,
    hot: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://192.168.1.105:3000',
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
