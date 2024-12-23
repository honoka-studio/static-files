// ==UserScript==
// @name         百度搜索首页优化
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://*.baidu.com/*
// @icon         https://blog.honoka.de/images/others/avatar/shizuku.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict'

    let sleep = timeMillis => new Promise(resolve => setTimeout(resolve, timeMillis))

    async function removeSearchInputPlaceholder() {
        let elements = document.querySelectorAll('#s_kw_wrap .s_ipt')
        for(let i = 0; i < 30; i++) {
            let shouldBreak = false
            for(let element of elements) {
                let attr = element.getAttribute('placeholder')
                if(attr != null && attr !== '') {
                    element.setAttribute('placeholder', '')
                    shouldBreak = true
                    break
                }
            }
            if(shouldBreak) break
            await sleep(100)
        }
    }
    removeSearchInputPlaceholder()
})()
