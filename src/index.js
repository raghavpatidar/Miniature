
import React from 'react'
import App from './App';
import Context from './context/Context';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const reactDom = require('react-dom');
function Restaurant() {
    return <React.StrictMode>
        <Context>
            <App />
        </Context>
    </React.StrictMode>
}

reactDom.render(<Restaurant />, document.getElementById('root'));