import React, { useEffect, useState } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import { useLoginUser } from '@/hooks/useLoginUser';

import LoadingPage from '@/pages/LoadingPage';

import routerConfig from './routerConfig';

export default function RouterApp() {
    const { loginUser: user, refreshLoginUser } = useLoginUser();
    // 是否初始化了, 主要是检查登录状态
    const [inited, setInited] = useState(false);

    useEffect(() => {
        // 页面刷新时检查用户登录状态
        const checkAuthStatus = async () => {
            // 如果状态中已经有用户信息，直接结束loading
            if (user) {
                return;
            }

            // 否则调用API检查是否已登录
            await refreshLoginUser();
            setInited(true);
        };

        checkAuthStatus();
    }, [user, refreshLoginUser]);

    const element = useRoutes(routerConfig);

    if (!inited) {
        return <LoadingPage />;
    }

    return <React.Suspense fallback={<LoadingPage />}>{element}</React.Suspense>;
}
