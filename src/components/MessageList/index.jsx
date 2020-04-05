// 这里我就用了React hooks的方式写组件了
import React, {useState, useEffect, useRef, Fragment, useImperativeHandle, forwardRef} from 'react';
import Notice from '@/components/Notice';
import Timer from '@/components/Timer';
import Message from '@/components/Message';

function MessageList({list = [], ownUsername}, ref){
	// 当前系统时间戳，为节省性能，会5分钟刷新一次
	let [currentDate, setDate] = useState(Date.now());

	// 外部容器和聊天容器的ref
	let chatWrap = useRef(null);
	let messageWrap = useRef(null);
    
    // 暴露子组件的方法给父组件
	useImperativeHandle(ref, () => ({
		// 是否需要滑动到底部
		isNeedSlider: () => {
			return (chatWrap.current.scrollHeight - (chatWrap.current.scrollTop + chatWrap.current.offsetHeight)) > 500;
		},
		// 滑动到底部的方法
		sliderToBottom:() => {
			chatWrap.current.scrollTop = messageWrap.current.offsetHeight;
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
					list.map(({_id, time, isShowTime = false, username, content, event = 'chat'}) => (
						<li className="message_wrap" key={_id}>
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
export default forwardRef(MessageList)