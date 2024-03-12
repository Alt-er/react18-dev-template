import { BrowserRouter as Router } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import React from 'react';
import { Provider } from 'jotai';
import myStore from './store';

// basename="/designer"

function App() {
    return (
        <React.StrictMode>
            <Provider store={myStore}>
                <Router basename="/">
                    <RouterApp />
                </Router>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
