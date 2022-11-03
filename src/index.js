// import {rerenderEntireTree} from './redux/render.js';
import './index.css';
import state from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state.js';
import { addMessage } from './redux/state.js'
import { updateNewMessage } from './redux/state.js'
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage = {addMessage}
                updateNewMessage = {updateNewMessage} />
        </React.StrictMode>
    );

}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

