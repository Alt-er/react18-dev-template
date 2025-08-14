import { BrowserRouter as Router } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import React from 'react';
import { Provider } from 'jotai';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import myStore from './store';

// basename="/designer"

function App() {
    return (
        <React.StrictMode>
            <Provider store={myStore}>
                <ConfigProvider locale={zhCN}>
                    <Router basename="/">
                        <RouterApp />
                    </Router>
                </ConfigProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
