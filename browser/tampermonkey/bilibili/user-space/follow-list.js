// ==UserScript==
// @name         bilibili个人空间关注列表增强
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  bilibili个人空间关注列表增强
// @author       Kosaka Bun
// @match        *://space.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    let checkAndDoScript = function(count) {
        setTimeout(function() {
            if(count > 30) return;
            let followedUserDomList = document.querySelectorAll(
                '.fans-action');
            if(followedUserDomList == null || followedUserDomList.length <= 0) {
                checkAndDoScript(count + 1);
                return;
            }
            doScript();
        }, 3 * 100);
    };
    let doScript = function() {
        let followedUserDomList = document.querySelectorAll('.fans-action');
        for(let i = 0; i < followedUserDomList.length; i++) {
            let dom = followedUserDomList[i];
            let unfollowBtnDiv = document.createElement('div');
            unfollowBtnDiv.setAttribute('class',
                'fans-action-btn follow');
            let unfollowBtnSpan = document.createElement('span');
            unfollowBtnSpan.setAttribute('class',
                'fans-action-text my-btn');
            unfollowBtnSpan.innerHTML = '取关';
            unfollowBtnDiv.appendChild(unfollowBtnSpan);
            dom.appendChild(unfollowBtnDiv);
            unfollowBtnDiv.onclick = function() {
                let dropDownItems = dom.querySelectorAll('.be-dropdown-item');
                for(let dropDown of dropDownItems) {
                    if(dropDown.innerText.trim() === '取消关注') {
                        let event = document.createEvent("HTMLEvents");
                        event.initEvent('click', true, true);
                        dropDown.dispatchEvent(event);
                        unfollowBtnDiv.setAttribute('class',
                            'fans-action-btn fans-action-follow');
                        unfollowBtnDiv.setAttribute('style',
                            'width: 54px;');
                        unfollowBtnDiv.onclick = undefined;
                    }
                }
            };
        }
    };
    checkAndDoScript(0);
})();