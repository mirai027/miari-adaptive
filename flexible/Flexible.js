;(function flexible(window, document) {
  // 获取根元素属性
  var docEl = document.documentElement
  // 获取设备 DPR
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    /**
     * 使用方法中“另外强烈建议对JS做内联处理，在所有资源加载之前执行这个JS”
     * DOMContentLoaded的解释 浏览器已经完全加载了 HTML，DOM 树已经构建完毕，但是像是 <img> 和样式表等外部资源可能并没有下载完毕
     * 也就是说，首次加载时。document.body === null。所以需要在 DOMContentLoaded后重新执行 setBodyFontSize。
     * 除初始化外，window的 resize、pageshow时已经有 document.body的值。执行 document.body.style.fontSize = 12 * dpr + 'px'
     */
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  /**
   * 参考 https://juejin.im/post/6844904002103033870  https://zhuanlan.zhihu.com/p/102138737
   * bfcache，即back-forward cache，可称为“往返缓存”，可以在用户使用浏览器的“后退”和“前进”按钮时加快页面的转换速度。这个缓存不仅保存页面数据，还保存了DOM和JS的状态，实际上是将整个页面都保存在内存里。如果页面位于bfcache中，那么再次打开该页面就不会触发onload事件
   * pageshow 这个事件在页面显示时触发，无论页面是否来自bfcache。在重新加载的页面中，pageshow会在load事件触发后触发；而对于bfcache中的页面，pageshow会在页面状态完全恢复的那一刻触发。
   */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
