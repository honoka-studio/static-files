// ==UserScript==
// @name         Google搜索结果在新标签页打开
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://www.google.com/search*
// @icon         https://blog.honoka.de/images/others/avatar/shizuku.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let urlTags = document.querySelectorAll('div#rso a')
    for(let tag of urlTags) {
        tag.setAttribute('target', '_blank')
    }
})();