import React from 'react'
import {formatMillisecond} from 'utils'
/**
 * @time    发送时间
 * @now     当前时间
 */
export default function Timer({time, now = Date.now()}){
    if(!time) return null;

    return (
        <div className="message_time">
            <p>{formatMillisecond(time, now)}</p>
        </div>
    )
}