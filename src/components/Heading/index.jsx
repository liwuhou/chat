import React from 'react'
import './index.scss';

// Heading组件，比较简单，接收当前标题(heading)和人数(count)
export default function Heading({heading, count = null}){
	return (
		<div className="chat__heading">{heading}{count ? `(${count})` : ''}</div>
	)
}
