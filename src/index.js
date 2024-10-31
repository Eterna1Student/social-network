import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/slices/store-toolkit";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)
