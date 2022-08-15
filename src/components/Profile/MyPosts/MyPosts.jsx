import React from 'react'
import s from './MyPosts.module.css'
import { Post }  from './Post/Post'

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?"  like='1'/>
                <Post message="It's my first post" like='15'/>
            </div>
        </div>)
}