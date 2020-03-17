import React, {useState, useEffect, useRef, Fragment, useImperativeHandle} from 'react';
import Notice from '@/components/Notice';
import Timer from '@/components/Timer';
import Message from '@/components/Message';

export default function MessageList({list, ownUsername}, ref){
	// 当前系统时间戳，为节省性能，会5分钟刷新一次
	let [currentDate, setDate] = useState(Date.now());

	let chatWrap = useRef(null);
	let messageWrap = useRef(null);
    
    // 暴露“回到消息底部”方法
    useImperativeHandle(ref, () => ({
        sliderToBottom(){
            this.chatWrap.current.scrollTop = this.messageWrap.current.offsetHeight;
        }
    }))
    
	// 这里每设置一个定时器，每个五分钟刷新下currentDate
	useEffect(() => {
		let timer = setInterval(() => setDate(Date.now()));
		return clearInterval(timer);
    }, []) // 传入空数组，我不希望state更新的时候也调用这个副作用
    

    
	return (
		<div className="chat__content" ref={chatWrap}>
			<ul ref={messageWrap}>
				{
					list.map(({_id, time, isShowTime = false, username, content, event = 'chat'}, idx) => (
						<li key={_id}>
							{
								event === 'notice' ? (
                                    <Notice content={content}/>
                                ) : (
									<Fragment>
										{isShowTime && <Timer time={time} now={currentDate}/>}
										<Message isSelf={ownUsername === username} content={content} username={username}/>
									</Fragment>
								)
							}
						</li>
					))
				}
			</ul>
		</div>
	)
}