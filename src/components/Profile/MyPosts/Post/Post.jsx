import s from './Post.module.css'
import React from 'react';

export const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg" alt="" /> 
                <span>{props.message}</span>
                <div>
                    <span>Like {props.like}</span>
                </div>
            </div>)
}

// export default Post