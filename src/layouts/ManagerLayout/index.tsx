import { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, theme } from 'antd';
import { UserOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, CarOutlined, FileTextOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useAtomValue } from 'jotai';
import { userAtom, logoutAtom } from '@/store/user';
import { useSetAtom } from 'jotai';

const { Header, Sider, Content } = Layout;

// Mock menu data
const menuItems: MenuProps['items'] = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: '首页',
        children: [
            { key: '1-1', label: '概览' },
            { key: '1-2', label: '统计分析' },
        ],
    },
    {
        key: '2',
        icon: <CarOutlined />,
        label: '车辆管理',
        children: [
            { key: '2-1', label: '车辆列表' },
            { key: '2-2', label: '车辆调度' },
            { key: '2-3', label: '维修保养' },
        ],
    },
    {
        key: '3',
        icon: <FileTextOutlined />,
        label: '订单管理',
        children: [
            { key: '3-1', label: '订单列表' },
            { key: '3-2', label: '退款处理' },
        ],
    },
    {
        key: '4',
        icon: <TeamOutlined />,
        label: '用户管理',
        children: [
            { key: '4-1', label: '学生用户' },
            { key: '4-2', label: '管理员' },
        ],
    },
    {
        key: '5',
        icon: <SettingOutlined />,
        label: '系统设置',
        children: [
            { key: '5-1', label: '基础设置' },
            { key: '5-2', label: '日志管理' },
        ],
    },
];

export default function ManagerLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const user = useAtomValue(userAtom);
    const logout = useSetAtom(logoutAtom);
    const { token } = theme.useToken();

    const handleLogout = () => {
        logout();
        console.log('User logged out');
        // TODO: Add navigation to login page
    };

    const items: MenuProps['items'] = [
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: '退出登录',
            onClick: handleLogout,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    background: token.colorBgContainer,
                    borderRight: `1px solid ${token.colorBorder}`,
                }}
                width={240}
            >
                <div
                    className="logo"
                    style={{
                        height: '48px',
                        margin: '16px',
                        background: token.colorPrimary,
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    {collapsed ? (
                        <img
                            src="/static/car-logo.svg"
                            alt="校园租车管理系统"
                            style={{
                                height: '32px',
                                width: '32px',
                            }}
                        />
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="/static/car-logo.svg"
                                alt="校园租车管理系统"
                                style={{
                                    height: '32px',
                                    width: '32px',
                                    marginRight: '8px',
                                }}
                            />
                            <span
                                style={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#fff',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                校园租车
                            </span>
                        </div>
                    )}
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1', '2', '3']}
                    items={menuItems}
                    style={{
                        background: 'transparent',
                        borderRight: 0,
                        marginTop: '8px',
                    }}
                    theme="light"
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: '0 16px',
                        background: token.colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: `1px solid ${token.colorBorder}`,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span
                            style={{
                                marginRight: '24px',
                                fontWeight: '500',
                                fontSize: '18px',
                            }}
                        >
                            校园租车管理系统
                        </span>
                        <Dropdown menu={{ items }}>
                            <div 
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    cursor: 'pointer',
                                    padding: '0 12px',
                                    borderRadius: '4px',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = token.colorBgTextHover;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <Avatar
                                    style={{
                                        backgroundColor: token.colorPrimary,
                                    }}
                                    icon={<UserOutlined />}
                                />
                                {user && (
                                    <span
                                        style={{
                                            marginLeft: 8,
                                            fontSize: token.fontSize,
                                        }}
                                    >
                                        {user.name}
                                    </span>
                                )}
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '16px',
                        padding: 24,
                        minHeight: 280,
                        background: token.colorBgContainer,
                        borderRadius: token.borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
