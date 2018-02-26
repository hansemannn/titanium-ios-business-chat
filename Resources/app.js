import { TiBusinessChatButton, CHAT_BUTTON_STYLE_LIGHT } from '/business-chat';

const win = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

const chatButton = new TiBusinessChatButton(CHAT_BUTTON_STYLE_LIGHT, () => {
  alert('Start chat!');
});

win.add(chatButton.instance);
win.open();
