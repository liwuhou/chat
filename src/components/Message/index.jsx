import React from 'react'

import './index.scss';
// 获取当前用户头像（取用户名）
const getuserIcon = (name = '') => {
    // 是否含有中文
    const hasCn = name.match(/[\u4e00-\u9fa5]/g);
    if(hasCn && hasCn.length){
        return name.slice(name.length - 2);
    }else{
        return name.slice(0, 4);
    }
}

/**
 * @isSelf      是否当前用户的发言
 * @username    这则消息的发言人
 * @content     消息内容
 */
export default function Message({isSelf, username, content}){
    return (
        <div className={`message ${isSelf ? 'right' : 'left'}_message`}>
            <div className="user">
                <span className="user_icon">{getuserIcon(username)}</span>
            </div>
            <div className="speech">
                <div className="username">{username}</div>
                <div className="content">{content}</div>
            </div>
        </div>
    )
}