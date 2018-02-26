import { 
  TiBusinessChatButton, 
  openTranscript,
  CHAT_BUTTON_STYLE_LIGHT, 
  ACTION_PARAMETER_BODY,
  ACTION_PARAMETER_GROUP,
  ACTION_PARAMETER_INTENT
} from '/business-chat';

const win = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

const chatButton = new TiBusinessChatButton(CHAT_BUTTON_STYLE_LIGHT, () => {
  Ti.API.info('Attempting to open transcript ...');

  // Replace "<your-business-id>" with the business ID received from Apple.
  // The method will log "[NSURLComponents initWithURL:resolvingAgainstBaseURL:]: nil URLString parameter" if the Business ID is invalid
  openTranscript('<your-business-id>', {
    ACTION_PARAMETER_BODY: 'missing_or_stolen_card',
    ACTION_PARAMETER_GROUP: 'credit_card_department',
    ACTION_PARAMETER_INTENT: 'I need to replace my credit card.'
  });
});

win.add(chatButton.instance);
win.open();
