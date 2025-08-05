import request from '@/utils/axios';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
    useEffect(() => {
        async () => {
            const a = await request.get(`/cosy/menuTest1`);
            console.info(a);
        };
    }, []);
    return (
        <div style={{ padding: '24px' }}>
            <h1>校园租车管理系统</h1>
            <p>欢迎使用校园租车管理系统</p>
            {/* TODO: Add dashboard content */}
        </div>
    );
};

export default Home;
