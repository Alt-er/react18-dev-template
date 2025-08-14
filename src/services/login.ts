import request from '@/utils/axios';
import { Result } from '@/utils/axios';
import { UserInfo } from '@/store/user';

// 登录请求参数
export interface LoginParams {
    customizeLogin: string;
    username: string;
    password: string;
}

// 登录响应数据
export interface LoginResponse {
    token?: string;
    // 根据实际后端返回的数据结构进行调整
}

// 自定义登录
export async function customLogin(params: LoginParams): Promise<Result<LoginResponse>> {
    return request({
        url: '/cosy/customLogin',
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
}

// 获取当前登录用户信息
export async function getUserInfo(): Promise<Result<UserInfo>> {
    return request({
        url: '/cosy/getUserInfo',
        method: 'post',
        data: {},
    });
}

// 登出
export async function customLogout(): Promise<Result<string>> {
    return request({
        url: '/cosy/customLogout',
        method: 'post',
        data: {},
    });
}
