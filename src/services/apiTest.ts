import API from '@/utils/axios';

export async function getMenuTest3(params: Record<string, any> = {}) {
    return await API.get('/dddd', {
        params: {
            id: 123,
            name: 'John Doe',
            ...params,
        },
    });
}

interface User {
    name: string;
    email: string;
}

export const createUser = async () => {
    try {
        // 发送 POST 请求
        const user: User = {
            name: 'John Doe',
            email: 'john@example.com',
        };
        const response = await API.post('/api/users', user, {
            headers: {
                'X-Custom-Header': 'value',
            },
        });
        // 处理响应数据
        console.log(response);
    } catch (error) {
        // 处理错误
        console.error(error);
    }
};
