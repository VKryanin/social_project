import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    let postsData = [
        { id: 1, post: 'I\'ll become king of the pirates', likesCount: 12 },
        { id: 2, post: 'Hello! I\`m Monkey D. Luffy', likesCount: 24 }
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
                <Post message={postsData[0].post} like={postsData[0].likesCount} />
                <Post message={postsData[1].post} like={postsData[1].likesCount} />
            </div>
        </div>)
}