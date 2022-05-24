// ==UserScript==
// @name         bilibili首页优化
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  bilibili首页优化
// @author       Kosaka Bun
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery-tampers@3.2.1/jquery.min.js
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let selector = $('input.nav-search-keyword');
    let check = function() {
        //检查选择器长度
        if(selector.length < 1) {
            setTimeout(function() {
                selector = $('input.nav-search-keyword');
                check();
            }, 300);
            return;
        }
        //检查搜索框内容
        let placeholder = selector.attr('placeholder');
        if(placeholder === '') {
            setTimeout(function() {
                check();
            }, 200);
            return;
        }
        //清除内容
        selector.attr('title', '');
        selector.attr('placeholder', '');
    };
    check();
})();