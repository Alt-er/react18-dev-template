import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { loginUserAtom } from '@/store/user';
import { getUserInfo, customLogin, LoginParams, customLogout } from '@/services/login';
import { useNavigate } from 'react-router-dom';

export const useLoginUser = () => {
    const loginUser = useAtomValue(loginUserAtom);
    const setLoginUser = useSetAtom(loginUserAtom);
    const navigate = useNavigate();

    // 获取当前用户信息
    const getLoginUser = useCallback(() => {
        return loginUser;
    }, [loginUser]);

    // 刷新当前用户信息
    const { loading: refreshLoading, runAsync: refreshLoginUser } = useRequest(
        async () => {
            const response = await getUserInfo();
            if (response.status === 200) {
                setLoginUser(response.data);
                return response.data;
            } else {
                throw new Error(response.message || '获取用户信息失败');
            }
        },
        {
            manual: true,
        },
    );

    // 用户登录
    const { loading: loginLoading, runAsync: login } = useRequest(
        async (params: LoginParams) => {
            const response = await customLogin(params);
            if (response.status === 200) {
                // 登录成功后获取用户信息
                const userInfo = await refreshLoginUser();
                return { success: true, data: userInfo, message: '' };
            } else {
                return { success: false, data: null, message: response.message || '登录失败' };
            }
        },
        {
            manual: true,
        },
    );

    // 用户登出
    const { loading: logoutLoading, runAsync: logout } = useRequest(
        async () => {
            try {
                // 调用后端登出接口
                await customLogout();
            } catch (error) {
                // 忽略登出接口的错误
            } finally {
                // 清除本地用户状态
                setLoginUser(null);
            }
        },
        {
            manual: true,
        },
    );

    // 检查用户是否已登录
    const isAuthenticated = !!loginUser;

    // 合并loading状态
    const loading = refreshLoading || loginLoading || logoutLoading;

    return {
        loginUser,
        getLoginUser,
        refreshLoginUser,
        login,
        logout,
        isAuthenticated,
        loading,
    };
};
