import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {setUpStore} from "./redux/store/store";
import {BrowserRouter} from "react-router-dom";

export const axios = require('axios').default;

const store = setUpStore()

ReactDOM.render(
    <React.StrictMode>
        {/*<BrowserRouter>*/}
        <Provider store={store}>
            <App />
        </Provider>
        {/*</BrowserRouter>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
