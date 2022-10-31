// import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './redux/render.js';
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

rerenderEntireTree(state);


// subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
