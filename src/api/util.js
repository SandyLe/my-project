const openOutSite = function (item) {
  var tempwindow = window.open('_blank') // 先打开页面
  tempwindow.location = item.url // 后更改页面地址
}
export { openOutSite }
