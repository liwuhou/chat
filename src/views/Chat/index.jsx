import React from 'react';
import Heading from '@/components/Heading';
import MessageList from '@/components/MessageList';
import ChatInput from '@/components/ChatInput';

import './index.scss';

export default class Chat extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            heading: '摸鱼俱乐部',
            count: 1,
            messageList: [
                {
                    _id: 'xx',
                    time: Date.now() - 1000,
                    username: '阿五',
                    event: 'notice',
                    content: '阿五帅气地进入了聊天室'
                },
                {
                    _id: 'xxx',
                    time: Date.now(),
                    username: '阿五',
                    event: 'chat',
                    content: 'Hello world！',
                }
            ]
        }
    }
    componentWillUnmount(){
        // 这里暂时先不保存cookie
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }

    onSendMessage = (message) => {
        // 请求接口发送消息
        
    }

    render(){
        const {heading, count, messageList, ownUsername} = this.state;
        return (
            <div className="chat">
                <Heading heading={heading} count={count}/>
                <MessageList list={messageList} ownUsername={ownUsername}/>
                <ChatInput onSendMessage={this.onSendMessage}/>
            </div>
        )
    }
}