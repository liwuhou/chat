import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入rem布局和全局样式
import 'utils/fit2rem';
import './index.scss';

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)