// https://cli.vuejs.org/zh/guide/css.html#postcss
// vant适配了 viewport https://youzan.github.io/vant/#/zh-CN/quickstart#shi-li-gong-cheng
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: 'last 2 versions'
    },
    'postcss-px2rem': {
      remUnit: 37.5
    }
  }
}
