import { BCChatButton, BCChatAction, BusinessChat } from 'BusinessChat';
import { UIKit } from 'UIKit';

const BUTTON_STYLE_LIGHT = BusinessChat.BCChatButtonStyleLight;
const BUTTON_STYLE_DARK = BusinessChat.BCChatButtonStyleDark;

class TiBusinessChatButton {
	constructor(style = BUTTON_STYLE_LIGHT, cb) {
		const ChatButtonDelegate = Hyperloop.defineClass('ChatButtonDelegate', 'NSObject');

		ChatButtonDelegate.addMethod({
				selector: 'buttonPressed:',
				instance: true,
				arguments: ['UIButton'],
				callback: (sender) => {
						cb && cb();
				}
		});

		this.button = BCChatButton.alloc().initWithStyle(style);
		this.button.addTargetActionForControlEvents(new ChatButtonDelegate(), 'buttonPressed:', UIKit.UIControlEventTouchUpInside);
	}
	
	get instance() {
		const layoutWrapper = Ti.UI.createView({
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE
		});
		
		layoutWrapper.add(this.button);
		
		return layoutWrapper;
	}
}

export {
	BUTTON_STYLE_LIGHT,
	BUTTON_STYLE_DARK,
	TiBusinessChatButton
}
