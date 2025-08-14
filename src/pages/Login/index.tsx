import React from 'react';
import { LockOutlined, UserOutlined, CarOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card, message, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLoginStyles } from './styles';
import { useLoginUser } from '@/hooks/useLoginUser';

const { Title, Text } = Typography;

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { loginUser, login, loading } = useLoginUser();
    const { styles } = useLoginStyles();

    if (loginUser) {
        navigate('/home');
        return null;
    }

    const onFinish = async (values: any) => {
        const result = await login({
            customizeLogin: 'true',
            username: values.username,
            password: values.password,
        });

        if (result.success) {
            if (result.data) {
                message.success('登录成功');
                navigate('/home');
            }
        } else {
            message.error(result.message);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <div className={styles.brandSection}>
                    <div className={styles.logo}>
                        <CarOutlined className={styles.logoIcon} />
                    </div>
                    <Title level={2} className={styles.brandTitle}>
                        校园租车管理系统
                    </Title>
                    <Text className={styles.brandSubtitle}>
                        专业的车辆租赁管理解决方案
                    </Text>
                </div>
            </div>
            
            <div className={styles.rightPanel}>
                <div className={styles.formWrapper}>
                    <div className={styles.formHeader}>
                        <Title level={3} className={styles.formTitle}>登录系统</Title>
                        <Text className={styles.formSubtitle}>请输入您的账号信息</Text>
                    </div>
                    
                    <Form 
                        name="login-form" 
                        initialValues={{ remember: true }} 
                        onFinish={onFinish} 
                        autoComplete="off" 
                        layout="vertical"
                        className={styles.form}
                    >
                        <Form.Item 
                            label="用户名" 
                            name="username" 
                            rules={[{ required: true, message: '请输入用户名!' }]}
                            className={styles.formItem}
                        >
                            <Input 
                                prefix={<UserOutlined className={styles.inputIcon} />} 
                                placeholder="请输入用户名"
                                size="large"
                                className={styles.input}
                            />
                        </Form.Item>

                        <Form.Item 
                            label="密码" 
                            name="password" 
                            rules={[{ required: true, message: '请输入密码!' }]}
                            className={styles.formItem}
                        >
                            <Input.Password 
                                prefix={<LockOutlined className={styles.inputIcon} />} 
                                placeholder="请输入密码"
                                size="large"
                                className={styles.input}
                            />
                        </Form.Item>

                        <div className={styles.formOptions}>
                            <Form.Item name="remember" valuePropName="checked" className={styles.checkboxItem}>
                                <Checkbox className={styles.checkbox}>记住我</Checkbox>
                            </Form.Item>
                            <a href="#" className={styles.forgotLink}>忘记密码？</a>
                        </div>

                        <Form.Item className={styles.submitItem}>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                className={styles.submitButton} 
                                loading={loading} 
                                size="large"
                                block
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
