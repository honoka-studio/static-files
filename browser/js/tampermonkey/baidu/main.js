// ==UserScript==
// @name         百度基本优化
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://*.baidu.com/*
// @icon         https://www.baidu.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/kosaka-bun/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  const utils = window.honokaBrowserUtils

  async function removeSearchPlaceholder() {
    let elements = document.querySelectorAll('#s_kw_wrap .s_ipt')
    for(let i = 0; i < 30; i++) {
      for(let it of elements) {
        if(it.placeholder !== '') {
          it.placeholder = ''
          return
        }
      }
      await utils.basic.sleep(100)
    }
  }

  removeSearchPlaceholder()
})();
