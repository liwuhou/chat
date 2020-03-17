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

/**
 * 将时间修改为可展示的时间文本
 * @fmt     文本格式
 * @time    时间戳
 */
export const parseTime = (fmt, time) => {
    const type = getDataType(time);
    time = type.includes('Date') ? time : new Date(time);
    const fmsMapTime = {
        "M+": time.getMonth() + 1, // 月份
        "d+": time.getDate(), // 日
        "h+": time.getHours() % 12 === 0 ? 12 : time.getHours() % 12, // 小时
        "H+": time.getHours(),
        "m+": time.getMinutes(), // 分
        "s+": time.getSeconds(), // 秒
        "q+": Math.floor((time.getMonth() + 3) / 3), // 季度
        "S": time.getMilliseconds() // 毫秒
    }

    const fmsMapWeek = [
        "一",         
        "二",         
        "三",         
        "四",         
        "五",         
        "六",
        "日",         
    ]

    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }
    if(/(E+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + fmsMapWeek[time.getDay() + ""]);         
    }
    for(var str in fmsMapTime){
        if(new RegExp("("+ str +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (fmsMapTime[str]) : (("00" + fmsMapTime[str]).substr(("" + fmsMapTime[str]).length)));         
        }
    }
    return fmt; 
}

/**
 * 格式化时间
 * @time    待转化的时间
 * @now     系统当前时间
 */
export const formatMillisecond = (time, now = Date.now()) => {
    time = new Date(time).valueOf();
    const diffTime = now - time;
    if(diffTime < 60 * 1000){
        return '刚刚';
    }else if(diffTime < 60 * 60 * 1000){
        return `${parseInt(diffTime / (60 * 1000), 10)}分前`;
    }else if(diffTime < 12 * 60 * 60 * 1000){
        return `${parseInt(diffTime / (60 * 60 * 1000), 10)}小时前`;
    }else if(diffTime < 30 * 24 * 60 * 60 * 1000){
        return `${Math.round(diffTime / (24 * 60 * 60 * 1000))}天前`;
    }else{
        return parseTime('M月d日EE HH:mm:ss', time);
    }
}