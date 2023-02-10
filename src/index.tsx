import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/c0-app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
