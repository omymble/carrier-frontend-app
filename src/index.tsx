import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state, addPassenger} from "./redux/state";

// addPassenger({name: 'yoyoyo', telephone: '9999', pointTo: {longitude: 333, latitude: 333}, pointFrom: {longitude: 111, latitude: 111}, startTime: '12:30'})

ReactDOM.render(
    <React.StrictMode>
        <App state={{...state}} addPassenger={addPassenger}/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
