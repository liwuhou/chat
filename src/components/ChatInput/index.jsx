import React, { useState } from 'react';
import './index.scss';

 
export default function ChatInput({onSendMessage}){
	const [message, setMessage] = useState('');
	// 输入框回车发送
	function handleKeyUpMessage(event){
		if(event.keyCode === 13) return handleClickSendMessage;
	}

	// 发送按钮
	function handleClickSendMessage(){
		if(!message) return;
		onSendMessage(message);
		setMessage('');
	}
	return (
		<div className="chat__input">
			<input
				className="chat__input_white"
				value={message}
				onChange={({target:{value}}) => setMessage(value)}
				onKeyUp={handleKeyUpMessage}
			/>
			<button
				className="chat__input_btn"
				onClick={handleClickSendMessage}
			>发送</button>
		</div>
	)
}