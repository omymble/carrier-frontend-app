import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import {StateObject} from "./types";

// addPassenger({name: 'yoyoyo', telephone: '9999', pointTo: {longitude: 333, latitude: 333}, pointFrom: {longitude: 111, latitude: 111}, startTime: '12:30'})

let rerenderTree = (state: StateObject) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={{...state}}
                 dispatch={store.dispatch.bind(store)}
                 /*addPassenger={store.addPassenger.bind(store)}
                 addDriver={store.addDriver.bind(store)}
                 updateTelephone={store.updateTelephone.bind(store)}*/
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)

reportWebVitals();
