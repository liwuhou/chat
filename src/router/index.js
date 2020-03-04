import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// 这里的页面组件还没有编辑，先占下位置
import Login from '@/views/Login';
import Chat from '@/views/Chat';

// 引入cookie工具函数
import {getCookie} from 'utils';

export default class Router extends React.Component{
    render(){
        return (
            <Switch>
                {/* 登录/注册 */}
                <Route exact path="/login" component={Login}/>
                {/* 聊天界面 */}
                <PrivateRouter path="/">
                    <Chat/>
                </PrivateRouter>
            </Switch>
        )
    }
}

// 登录权限控制
function PrivateRouter({children, ...props}){
    return (
        <Route
            {...props}
            render={({location}) => {
                const hasAuthority = getCookie('username');
                return (
                    hasAuthority ? 
                    children : 
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: location}
                    }}/>
                )
            }}
        />
    )
}