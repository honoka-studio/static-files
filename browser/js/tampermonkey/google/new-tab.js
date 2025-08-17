// ==UserScript==
// @name         Google搜索结果在新标签页打开
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://www.google.com/search*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/kosaka-bun/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  let urlTags = document.querySelectorAll('div#rso a')
  for(let it of urlTags) {
    it.setAttribute('target', '_blank')
  }
})()
