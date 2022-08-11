import s from './MyPosts.module.css'
import React from 'react';

export const MyPosts = () => {
    return (
        <div onClick={ ()=>{alert('eeeee boy')} }>
            my posts
            <div>
            new post
            </div>
            <div className={s.posts}>
                <div className={s.item} onClick={ ()=>{alert('lol')}}>
                post 1
                </div>
                <div className={s.item}>
                post 2
                </div>
            </div>
        </div>)
}