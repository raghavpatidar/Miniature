
import react from 'react'
import App from './App';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const reactDom = require('react-dom');
function Restaurant() {
    return <section>
        <App></App>
    </section>
}

reactDom.render(<Restaurant />, document.getElementById('root'));