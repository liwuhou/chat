import axios from 'axios'
import qs from 'qs';


// 注册/登录
export const login = async (params) => {
    const {data} = await axios.get('/api/login.json', qs.stringify(params));
    return data;
}
