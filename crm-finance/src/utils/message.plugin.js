export default {
  install (Vue, options) {
    Vue.prototype.$message = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html, displayLength: 1000 })
    }

    Vue.prototype.$error = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Error]: ${html}` })
    }
  }
}
