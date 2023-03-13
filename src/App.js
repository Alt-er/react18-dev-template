import "./global.css";

import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

import RouterApp from "./router/RouterApp";
import React from "react";

// basename="/designer"

function App() {
    return (
        <React.StrictMode>
            <RecoilRoot>
                <Router basename="/">
                    <RouterApp />
                </Router>
            </RecoilRoot>
        </React.StrictMode>
    );
}

export default App;
