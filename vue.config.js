module.exports = {
  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
    proxy: 'http://localhost:8002'
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production'
};
