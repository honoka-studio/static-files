// ==UserScript==
// @name         bilibili个人空间关注列表增强
// @namespace    http://tampermonkey.net/
// @version      1.0.6
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
    let addUnfollowAllBtn = function() {
        let dom = document.createElement('li');
        dom.setAttribute('class', 'list-item clearfix');
        let dom2 = document.createElement('div');
        dom2.setAttribute('class', 'fans-action-btn follow');
        let dom2Style = 'float: right; position: relative; right: 24px;';
        dom2.setAttribute('style', dom2Style);
        let dom3 = document.createElement('span');
        dom3.setAttribute('class', 'fans-action-text');
        dom3.innerHTML = '全部取关';
        dom2.appendChild(dom3);
        dom.appendChild(dom2);
        dom2.onclick = function() {
            if(!confirm('确定取关本页所有用户吗？')) return;
            let unfollowBtns = document.querySelectorAll('.unfollow-btn');
            for(let btn of unfollowBtns) {
                setTimeout(function() {
                    let event = document.createEvent('HTMLEvents');
                    event.initEvent('click', true, true);
                    btn.dispatchEvent(event);
                }, 0);
            }
            dom2.setAttribute('class',
                'fans-action-btn fans-action-follow');
            dom2.setAttribute('style',
                dom2Style + ' width: 54px;');
            dom2.onclick = undefined;
        };
        document.querySelectorAll('ul.relation-list')[0]
            .appendChild(dom);
    };
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
                'fans-action-btn follow unfollow-btn');
            let unfollowBtnSpan = document.createElement('span');
            unfollowBtnSpan.setAttribute('class',
                'fans-action-text');
            unfollowBtnSpan.innerHTML = '取关';
            unfollowBtnDiv.appendChild(unfollowBtnSpan);
            dom.appendChild(unfollowBtnDiv);
            unfollowBtnDiv.onclick = function() {
                let dropDownItems = dom.querySelectorAll('.be-dropdown-item');
                for(let dropDown of dropDownItems) {
                    if(dropDown.innerText.trim() !== '取消关注') continue;
                    let event = document.createEvent('HTMLEvents');
                    event.initEvent('click', true, true);
                    dropDown.dispatchEvent(event);
                    unfollowBtnDiv.setAttribute('class',
                        'fans-action-btn fans-action-follow');
                    unfollowBtnDiv.setAttribute('style',
                        'width: 54px;');
                    unfollowBtnDiv.onclick = undefined;
                }
            };
        }
        addUnfollowAllBtn();
    };
    checkAndDoScript(0);
})();