// ==UserScript==
// @name         百度基本优化
// @description  none
// @namespace    https://github.com/honoka-studio
// @version      1.0.3
// @author       Kosaka Bun
// @match        *://*.baidu.com/*
// @icon         https://www.baidu.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/honoka-studio/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  const utils = window.honokaBrowserUtils

  function removeSearchPlaceholder() {
    utils.basic.setAndClearInterval(() => {
      let textArea = document.getElementById('chat-textarea')
      if(!textArea) return
      textArea.removeAttribute('data-ai-placeholder')
      textArea.removeAttribute('data-normal-placeholder')
      textArea.removeAttribute('placeholder')
    }, 100, 30)
  }

  removeSearchPlaceholder()
})()
