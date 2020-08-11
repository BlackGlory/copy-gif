# Copy GIF [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cehkcdgmdkpbheocenmlclejafodogfk.svg?maxAge=86400)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/LICENSE)

[![copy-gif](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/src/assets/images/icon-128.png)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk)

The extension adds a menu item so that you can try to copy the GIF image as HTML.

Whether or not pasting works depends on the application being pasted, not all applications can be pasted in HTML format.

## Technical details

Windows do not provide APIs for copying GIF images to the clipboard, so Chrome can only copy the bitmap to the clipboard, which means that GIF animations will be copied as a single-frame image.

By looking at the results of GIF image copying from IE, Edge(not Edge based on Chromium), Firefox, I found that they used additional data formats to describe the contents of GIF images. However, this format cannot be implemented via browser-side JavaScript, if one day the Web standard does provide an advanced clipboard API, it may be possible to copy GIF images directly.

Copying a GIF as HTML is an alternative method, the clipboard content does not contain the image data, only its hyperlink, and the application that is pasted needs to fetch the GIF image.

You can also select a section of GIF image that contains text and use the browser's original copy command, which is the same thing that the extension does, with no essential difference.

## Updated 2020-08-11

It's 2020, and we have the [Clipboard API](https://w3c.github.io/clipboard-apis/), but we still can't use it to copy GIF images.

According to the test results, Chrome 84 does not support:
* `text/html` as [ClipboardItem](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem)
* multi-part data
