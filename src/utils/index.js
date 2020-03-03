// 常用工具函数

/**
 * 动态修改页面title
 * @title       String  页面标题
 */
export const changeTitle = (title = '摸鱼俱乐部') => {
    document.title = title;
}