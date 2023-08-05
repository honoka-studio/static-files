// ==UserScript==
// @name         bilibili搜索框推荐词拦截
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  bilibili搜索框推荐词拦截
// @author       Kosaka Bun
// @match        *://*.bilibili.com/*
// @icon         https://blog.honoka.de/images/others/avatar/shizuku.png
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    let selectorNames = [
        '.nav-search-input',
        '.nav-search-keyword'
    ];
    let checkAndDoScript = function(count) {
        if(count >= 50) return;
        setTimeout(function() {
            for(let selectorName of selectorNames) {
                let searchInputList = document.querySelectorAll(selectorName);
                for(let item of searchInputList) {
                    if(item.title !== '' || item.placeholder !== '') {
                        doScript(item);
                        return;
                    }
                }
            }
            checkAndDoScript(count + 1);
        }, 200);
    };
    let doScript = function(item) {
        item.title = '';
        item.placeholder = '';
    }
    checkAndDoScript(0);
})();

