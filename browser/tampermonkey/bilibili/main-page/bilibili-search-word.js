// ==UserScript==
// @name         bilibili搜索框推荐词拦截
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  bilibili搜索框推荐词拦截
// @author       Kosaka Bun
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    let selectorNames = [
        '.nav-search-input',
        '.nav-search-keyword'
    ]
    let doBlock = function(count) {
        if(count >= 10) return;
        for(let selectorName of selectorNames) {
            let searchInputList = document.querySelectorAll(selectorName);
            for(let item of searchInputList) {
                item.title = '';
                item.placeholder = '';
            }
        }
        setTimeout(function() {
            doBlock(count + 1);
        }, 500);
    }
    doBlock(0);
})();

