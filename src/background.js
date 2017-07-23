'use strict'

function setClipboard(imageUrl) {
  var container = document.createElement('span')
  container.innerHTML = '<img src="' + imageUrl + '">'
  document.body.appendChild(container)
  container.focus()
  document.execCommand('SelectAll', false, null)
  document.execCommand('Copy', false, null)
  document.body.removeChild(container)
}

chrome.runtime.onInstalled.addListener(function(details) {
  chrome.contextMenus.create({
    id: 'COPY_GIF'
  , title: 'Copy GIF'
  , contexts: ['image']
  })
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'COPY_GIF') {
    setClipboard(info.srcUrl)
  }
})
