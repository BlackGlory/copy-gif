'use strict'

const COPY_GIF = 'COPY_GIF'

function setClipboard(imageUrl) {
  const container = document.createElement('span')
  container.innerHTML = '<img src="' + imageUrl + '">'
  document.body.appendChild(container)
  container.focus()
  document.execCommand('SelectAll', false, null)
  document.execCommand('Copy', false, null)
  document.body.removeChild(container)
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: COPY_GIF
  , title: chrome.i18n.getMessage('titleCopyGIF') + '(&C)'
  , contexts: ['image']
  })
})

chrome.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === COPY_GIF) setClipboard(info.srcUrl)
})
