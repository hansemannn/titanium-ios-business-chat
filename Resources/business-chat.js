import { 
	BCChatButton, 
	BCChatAction, 
	BusinessChat
} from 'BusinessChat';

import { UIKit } from 'UIKit';

// Used in "TiBusinessChatButton"
const BUTTON_STYLE_LIGHT = BusinessChat.BCChatButtonStyleLight;
const BUTTON_STYLE_DARK = BusinessChat.BCChatButtonStyleDark;

// Used in "openTranscript"
const ACTION_PARAMETER_BODY = BCChatAction.BCParameterNameBody;
const ACTION_PARAMETER_GROUP = BCChatAction.BCParameterNameGroup;
const ACTION_PARAMETER_INTENT = BCChatAction.BCParameterNameIntent;

/*
 * A Business Chat-branded button for use in your app.
 */
class TiBusinessChatButton {

	/*
	 * Initializes a chat button with the specified style and callback
	 *
	 * @param style - The button style, default: BUTTON_STYLE_LIGHT.
	 * @param cb - The callback to invoke on click.
	 */
	constructor(style = BUTTON_STYLE_LIGHT, cb) {
		// Create delegate to handle touch events
		const ChatButtonDelegate = Hyperloop.defineClass('ChatButtonDelegate', 'NSObject');

		// Create delegate method that is called once the touch-up-inside event triggers
		ChatButtonDelegate.addMethod({
				selector: 'buttonPressed:',
				instance: true,
				arguments: ['UIButton'],
				callback: (sender) => {
						cb && cb();
				}
		});

		// Create a new BCChatButton instance
		this.button = BCChatButton.alloc().initWithStyle(style);
		
		// Assign the delegate
		this.button.addTargetActionForControlEvents(new ChatButtonDelegate(), 'buttonPressed:', UIKit.UIControlEventTouchUpInside);
	}
	
	/*
	 * Returns the instance inside a Ti.UI.View to make use of the automatic sizing
	 * You can also AutoLayout of course, but this is done to keep it simple
	 *
	 * @return <Ti.UI.View> The chat-button wrapped inside a layout view. 
	 */
	get instance() {
		const layoutWrapper = Ti.UI.createView({
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		
		layoutWrapper.add(this.button);
		
		return layoutWrapper;
	}
}

/*
 * Tells Business Chat to start a chat.
 *
 * @param businessIdentifier - A string value that identifies the business. 
 * @param intentParameters - A set of parameters to associate with the chat session.
 */
function openTranscript(businessIdentifier, intentParameters) {
	BCChatAction.openTranscriptIntentParameters(businessIdentifier, intentParameters);
}

export {
	BUTTON_STYLE_LIGHT,
	BUTTON_STYLE_DARK,
	ACTION_PARAMETER_BODY,
	ACTION_PARAMETER_GROUP,
	ACTION_PARAMETER_INTENT,
	TiBusinessChatButton,
	openTranscript
}
