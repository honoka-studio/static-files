// ==UserScript==
// @name         bilibili基本优化
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.2
// @author       Kosaka Bun
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/kosaka-bun/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  const utils = window.honokaBrowserUtils

  async function removeSearchPlaceholder() {
    const selectorNames = [
      '.nav-search-input',
      '.nav-search-keyword'
    ]
    let elements = []
    for(let i = 0; i < 100; i++) {
      for(let it of selectorNames) {
        elements.push(...document.querySelectorAll(it))
      }
      if(elements.length > 0) break
      await utils.basic.sleep(100)
    }
    for(let i = 0; i < 50; i++) {
      for(let it of elements) {
        if(it.title !== '' || it.placeholder !== '') {
          it.title = ''
          it.placeholder = ''
          return
        }
      }
      await utils.basic.sleep(100)
    }
  }

  removeSearchPlaceholder()
})();
