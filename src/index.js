import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)
