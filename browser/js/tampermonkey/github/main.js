// ==UserScript==
// @name         GitHub基本优化
// @description  none
// @namespace    https://github.com/honoka-studio
// @version      1.0.2
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
    let fontFamily = 'var(--fontStack-sansSerif, -apple-system, BlinkMacSystemFont, "Segoe UI", ' +
      '"Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji")'
    let styles = `
        body {
            --font-family: ${fontFamily};
        }
    `
    let styleElement = document.createElement('style')
    styleElement.textContent = styles
    document.head.appendChild(styleElement)
  }

  resetStyles()
})()
