# Copy GIF [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cehkcdgmdkpbheocenmlclejafodogfk.svg?maxAge=86400)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/LICENSE)

[![copy-gif](https://raw.githubusercontent.com/BlackGlory/copy-gif/master/src/assets/images/icon-128.png)](https://chrome.google.com/webstore/detail/cehkcdgmdkpbheocenmlclejafodogfk)

The extension adds a menu item so that you can try to copy the GIF image as HTML format, it does not always work.

Please note that not all applications can paste HTML format, some image will due to Anti-theft technology and can not paste.

## About

Windows do not provide API about copy GIF images into the clipboard, so Chrome can only copy bitmap into the clipboard, it means GIF animation will be copied as a still image.

By looking at the results of the GIF image copy of IE and Edge, I found that it uses a special HTML format to describe the contents of the GIF image, but this format can not be implemented via browser-side JavaScript, and if one day the Web standard really opens the Clipboard API, perhaps direct copy GIF will become a reality.

HTML format clipboard data is a fake method to COPY GIF, the copy content does not contain the GIF image itself, contains only its hyperlinks, and the application that is pasted needs to remotely retrieve the real GIF image itself from the hyperlink, Paste may fail because of network reasons. After trying, DataURI is not supported in this format, so I actually did not make any progress in copying GIF images.

You can select a paragraph containing GIF images of the text, and through the command to copy to the clipboard. That is the thing that extension doing, there is no essential difference.
