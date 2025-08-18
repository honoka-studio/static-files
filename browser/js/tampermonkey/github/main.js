// ==UserScript==
// @name         GitHub基本优化
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://*.github.com/*
// @icon         https://github.com/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  function resetStyles() {
    let count = 0
    let task = setInterval(() => {
      let style = document.body.style
      style.fontFamily = 'var(--fontStack-sansSerif, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
        '"Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji")'
      if(count >= 30) clearInterval(task)
    }, 100)
  }

  resetStyles()
})()
