// ==UserScript==
// @name         百度基本优化
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.2
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

  async function removeSearchPlaceholder() {
    let count = 0
    let task = setInterval(() => {
      let textArea = document.getElementById('chat-textarea')
      if(!textArea) return
      textArea.removeAttribute('data-ai-placeholder')
      textArea.removeAttribute('data-normal-placeholder')
      textArea.removeAttribute('placeholder')
      count++
      if(count >= 30) clearInterval(task)
    }, 100)
  }

  removeSearchPlaceholder()
})()
