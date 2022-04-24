// ==UserScript==
// @name         bilibili新版首页优化
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  bilibili新版首页优化
// @author       Kosaka Bun
// @match        *://*.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    //region 参数
    const blockAreaNameList = [
        '直播', '番剧', '国创', '综艺', '漫画', '游戏',
        '知识', '生活', '时尚', '资讯', '娱乐', '专栏',
        '电影', '电视剧', '影视'
    ];
    //endregion

    //region 代码
    let checkAndDoBlock = function(count) {
        if(count >= 5) return;
        let sectionList = document.querySelectorAll('.bili-footer');
        if(sectionList.length > 0) {
            doBlock();
            return;
        }
        setTimeout(function() {
            checkAndDoBlock(count + 1);
        }, 1000);
    }
    let doBlock = function() {
        //分区
        let areaList = document.querySelectorAll('section.bili-grid');
        for(let area of areaList) {
            let spans = area.querySelectorAll('.area-header .left span');
            for(let span of spans) {
                if(blockAreaNameList.indexOf(span.innerHTML.trim()) !== -1) {
                    area.style.display = 'none';
                }
            }
        }
    }
    //endregion
    checkAndDoBlock(0);
})();