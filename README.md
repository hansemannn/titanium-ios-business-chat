# iOS 11.3+ BusinessChat API

<img src="screenshot.png" width="300" alt="iOS 11.3 BusinessChat API" />

## Requirements

- [x] iOS 11.3+
- [x] Titanium SDK 7.1.0 (`appc sdk install -b 7_1_X`)
- [x] Hyperloop 3.1.0

## Example

```js
import { TiBusinessChatButton, CHAT_BUTTON_STYLE_LIGHT } from '/business-chat';

const win = Ti.UI.createWindow({
backgroundColor: '#fff'
});

const chatButton = new TiBusinessChatButton(CHAT_BUTTON_STYLE_LIGHT, () => {
alert('Start chat!');
});

win.add(chatButton.instance);
win.open();
```

Or just run this app!

## License

MIT

## Author

Hans Knöchel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))
