import '../css/index.scss'
import $ from 'jquery'

(() => {
  const index = {
    init: function() {
      var that = this
      that.initFontSize()
    },
    initFontSize: function() {
      const cw = window.screen.width || document.body.clientWidth || document.body.offsetWidth || 750
      let fontsize = 75 * cw / 750
      if (navigator.userAgent.toLowerCase().match(/WindowsWechat/i) == "windowswechat") fontsize = 50
      document.documentElement.style.fontSize = (fontsize || 32) + 'px'
    }
  }
  index.init()
})()