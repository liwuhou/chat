import React, { useState } from 'react';
import './index.scss';

// export default class ChatInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             message: '',
//         }
//     }
//     handleKeyUpMessage = (event) => {
//         if(event.keyCode === 13) this.handleClickSendMessage();
//     }
//     handleClickSendMessage = () => {
//         if(!this.state.message) return;
//         this.props.onsendMsg(this.state.message);
//         this.setState({message: ''});
//     }
//     handleChangeMessage = (event) => {
//         this.setState({
//             message: event.target.value
//         });
//     }
    
//     render() { 
//         return ( 
//             <div className="chat__input">
//                 <input
//                     className="chat__input_white"
//                     value={this.state.message}
//                     onChange={this.handleChangeMessage}
//                     onKeyUp={this.handleKeyUpMessage}
//                 />
//                 <button
//                     className="chat__input_btn"
//                     onClick={this.handleClickSendMessage}
//                 >发送</button>
//             </div>
//         );
//     }
// }
 
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