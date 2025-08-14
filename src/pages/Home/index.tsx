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
            <h1>XXXX管理系统</h1>
            <p>欢迎使用XXXX管理系统</p>
            {/* TODO: Add dashboard content */}
        </div>
    );
};

export default Home;
