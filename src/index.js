import './index.css';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {rerenderEntireTree} from './redux/render.js';
// import { addPost } from './redux/state';
// import { updateNewPostText } from './redux/state.js';
// import { addMessage } from './redux/state.js'
// import { updateNewMessage } from './redux/state.js'
// import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // updateNewMessage={store.updateNewMessage.bind(store)} 
                />
        </React.StrictMode>
    );

}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

