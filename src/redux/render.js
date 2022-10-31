import React from 'react';
import ReactDOM from 'react-dom/client';
import './../index.css';
import App from '../App';
import { addPost } from './state';
import { updateNewPostText } from './state.js';
import { addMessage } from './state.js'
import { updateNewMessage } from './state.js'

import state from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
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
