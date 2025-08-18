// ==UserScript==
// @name         GitHub基本优化
// @description  none
// @namespace    https://github.com/honoka-studio
// @version      1.0.1
// @author       Kosaka Bun
// @match        *://*.github.com/*
// @icon         https://github.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/honoka-studio/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  const utils = window.honokaBrowserUtils

  function resetStyles() {
    utils.basic.setAndClearInterval(() => {
      let style = document.body.style
      style.fontFamily = 'var(--fontStack-sansSerif, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
        '"Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji")'
    }, 100, 30)
  }

  resetStyles()
})()
