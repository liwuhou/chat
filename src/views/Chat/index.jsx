import React from 'react';
import Heading from '@/components/Heading';
import MessageList from '@/components/MessageList';
import ChatInput from '@/components/ChatInput';

import './index.scss';

export default class Chat extends React.Component{
    componentWillUnmount(){
        // 这里暂时先不保存cookie
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }

    render(){
        return (
            <div className="chat">
                <Heading/>
                <MessageList/>
                <ChatInput/>
            </div>
        )
    }
}