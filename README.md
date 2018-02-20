# Copy GIF [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cehkcdgmdkpbheocenmlclejafodogfk.svg?maxAge=86400)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/LICENSE)

[![copy-gif](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/src/assets/images/icon-128.png)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk)

The extension adds a menu item so that you can try to copy the GIF image as HTML, the effectiveness of the pasting depending on whether the pasted application supports HTML.

*Please note that not all applications can be pasted in HTML format, in addition some of the images may be due to anti-hotlinking technology and can not paste.*

## Technical details

Windows do not provide APIs for copying GIF images to the clipboard, so Chrome can only copy the bitmap to the clipboard, which means that GIF animations will be copied as a single-frame image.

By looking at the results of GIF image copying from IE and Edge, I found that they used a special HTML format to describe the contents of GIF images. However, this format cannot be implemented via browser-side JavaScript, if one day the Web standard does provide an advanced clipboard API, it may be a reality to copy the GIF data directly.

HTML format clipboard data is an alternative method to COPY GIF, the copy content does not contain the GIF image itself, contains only its hyperlinks, and the application that is pasted needs to remotely retrieve the real GIF image itself from the hyperlink, Paste may fail because of network reasons. After trying, DataURI is not supported in this format, so we actually did not make any progress in copying GIF images.

You can also select a section of GIF image that contains text and use the browser's original copy command, which is the same thing that the extension does, with no essential difference.

## By the way

Firefox support copy GIF image on Windows.
