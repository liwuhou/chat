// 常用工具函数

/**
 * 动态修改页面title
 * @title       String  页面标题
 */
export const changeTitle = (title = '摸鱼俱乐部') => {
    document.title = title;
}

/**
 * 获取当前cookie数据对象
 */
export const getCookieObj = () => {
    const cookies = document.cookie.split(';');
    return cookies.reduce((total, cur) => {
        const [key, value] = cur.split('=');
        return {
            ...total,
            [key]: value
        }
    }, {})
}

/**
 * 获取cookie数据
 * @key     String  cookie的键名
 */
export const getCookie = (key) => {
    const cookies = getCookieObj();
    return cookies[key];
}