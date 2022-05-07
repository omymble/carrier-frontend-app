import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/reduxStore";
import {StoreObject} from "./types";

let rerenderTree = (store: StoreObject) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={{...store.getState()}}
                 store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store)
// @ts-ignore
store.subscribe(() => {
    rerenderTree(store)
})

reportWebVitals();
