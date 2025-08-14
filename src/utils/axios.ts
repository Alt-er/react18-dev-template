import { message } from 'antd';
import axios from 'axios';

// 分页数据基础接口
export interface Pager<T> {
    page: number;
    size: number;
    total: number;
    dataList: T[];
}

// 基础响应接口
export interface Result<T> {
    status: number;
    message: string;
    data: T;
}

// 用于控制401错误提示频率的变量
let lastAuthErrorTime = 0;

const request = axios.create({
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么：例如添加token
        // config.headers['Authorization'] = '你的token';
        config.headers['x-requested-with'] = 'XMLHttpRequest';
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        // 对响应数据做点什么
        const res = response.data;
        // 根据你的业务处理回调
        if (res.status !== 200) {
            // 处理错误
            // ...
            console.log(res);
            message.error(res.data || res.message);
            return Promise.reject(new Error(res.data || res.message || 'Error'));
        } else {
            return res;
        }
    },
    (error) => {
        // 对响应错误做点什么
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            // 处理401未授权错误
            if (error.response.status === 401) {
                const now = Date.now();
                // 确保5秒内只提示一次
                if (now - lastAuthErrorTime > 5000) {
                    lastAuthErrorTime = now;
                    message.error('登录已过期，请重新登录');
                    // 延迟一秒后刷新页面，让用户看到提示信息
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } else {
                message.error(error.response.data.message);
            }
        }
        return Promise.reject(error);
    },
);
export default request;
