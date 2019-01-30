 const path = require('path');
 module.exports = {
   devServer: {
     // overlay: {
     //   warnings: true,
     //   errors: true
     // }
     proxy: 'http://localhost:8002'

   },
   chainWebpack: config => {
     config.module.rule('svg')
       .exclude.add(path.resolve('./src/icons'))
       .end();
     config.module.rule('icons')
       .test(/\.svg$/)
       .include.add(path.resolve('./src/icons'))
       .end()
       .use('svg-sprite-loader')
       .loader('svg-sprite-loader')
       .options({
         symbolId: 'icon-[name]'
       })
   },
   lintOnSave: process.env.NODE_ENV !== 'production',
   productionSourceMap: process.env.NODE_ENV !== 'production'
 };
