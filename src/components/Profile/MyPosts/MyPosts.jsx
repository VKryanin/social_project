import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    let postsData = [
        { id: 1, post: 'Hi! How are you?', likesCount: 12 },
        { id: 2, post: 'It\'s my first post', likesCount: 24 }
    ]

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" like='1' />
                <Post message="It's my first post" like='15' />
            </div>
        </div>)
}