// ==UserScript==
// @name         bilibili个人空间关注列表增强
// @description  none
// @namespace    https://github.com/kosaka-bun
// @version      1.0.0
// @author       Kosaka Bun
// @match        *://space.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @require      https://raw.githubusercontent.com/kosaka-bun/static-files/refs/heads/master/browser/js/honoka-browser-utils/basic.js
// @run-at       document-end
// ==/UserScript==
//noinspection JSIgnoredPromiseFromCall

(function() {
  'use strict'

  const utils = window.honokaBrowserUtils

  async function addUnfollowAllBtn() {
    let dom = document.createElement('li')
    dom.setAttribute('class', 'list-item clearfix')
    let dom2 = document.createElement('div')
    dom2.setAttribute('class', 'fans-action-btn follow')
    dom2.setAttribute('style', 'float: right; position: relative; right: 24px;')
    let dom3 = document.createElement('span')
    dom3.setAttribute('class', 'fans-action-text')
    dom3.innerHTML = '全部取关'
    dom2.appendChild(dom3)
    dom.appendChild(dom2)
    dom2.onclick = () => {
      if(!confirm('确定取关本页所有用户吗？')) return
      let unfollowBtns = document.querySelectorAll('.unfollow-btn')
      for(let btn of unfollowBtns) {
        setTimeout(() => {
          let event = new Event('click', {
            bubbles: true,
            cancelable: true
          })
          btn.dispatchEvent(event)
        }, 0)
      }
      dom2.setAttribute('class', 'fans-action-btn fans-action-follow')
      dom2.setAttribute('style', 'float: right; position: relative; right: 24px; width: 54px;')
      dom2.onclick = undefined
    }
    for(let i = 0; i < 15; i++) {
      if(document.querySelectorAll('.unfollow-btn').length <= 0) {
        await utils.basic.sleep(200)
        continue
      }
      document.querySelectorAll('ul.relation-list')[0].appendChild(dom)
      break
    }
  }

  async function doScript() {
    for(let i = 0; i < 30; i++) {
      let followedUserDomList = document.querySelectorAll('.fans-action')
      if(followedUserDomList == null || followedUserDomList.length <= 0) {
        await utils.basic.sleep(300)
        continue
      }
      for(let i = 0; i < followedUserDomList.length; i++) {
        let dom = followedUserDomList[i]
        let unfollowBtnDiv = document.createElement('div')
        unfollowBtnDiv.setAttribute('class', 'fans-action-btn follow unfollow-btn')
        let unfollowBtnSpan = document.createElement('span')
        unfollowBtnSpan.setAttribute('class', 'fans-action-text')
        unfollowBtnSpan.innerHTML = '取关'
        unfollowBtnDiv.appendChild(unfollowBtnSpan)
        dom.appendChild(unfollowBtnDiv)
        unfollowBtnDiv.onclick = () => {
          let dropDownItems = dom.querySelectorAll('.be-dropdown-item')
          for(let dropDown of dropDownItems) {
            if(dropDown.innerText.trim() !== '取消关注') continue
            let event = new Event('click', {
              bubbles: true,
              cancelable: true
            })
            dropDown.dispatchEvent(event)
            unfollowBtnDiv.setAttribute('class', 'fans-action-btn fans-action-follow')
            unfollowBtnDiv.setAttribute('style', 'width: 54px;')
            unfollowBtnDiv.onclick = undefined
          }
        }
      }
      await addUnfollowAllBtn()
      break
    }
  }

  doScript()
})();
