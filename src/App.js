import "./global.less";

import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

import RouterApp from "./router/RouterApp";

// basename="/designer"

function App() {
    return (
        <RecoilRoot>
            <Router basename="/">
                <RouterApp />
            </Router>
        </RecoilRoot>
    );
}

export default App;
