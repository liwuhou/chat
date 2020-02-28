import React from 'react';
import {Route, Switch} from 'react-router-dom';

// 这里的页面组件还没有编辑，先占下位置
import Login from '../views/Login';
import Chat from '../views/Chat';

export default class Router extends React.Component{
    render(){
        return (
            <Switch>
                {/* 登录/注册 */}
                <Route exact path="/login" component={Login}/>
                {/* 聊天界面 */}
                <Route exact path="/chat" component={Chat}/>
            </Switch>
        )
    }
}