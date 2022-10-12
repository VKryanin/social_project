import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    let postsData = [
        { id: 1, post: 'Hello! I\`m Monkey D. Luffy', likesCount: Math.floor(Math.random() * 1000), date: 'October 20, 1999' },
        { id: 2, post: 'I\'ll become king of the pirates', likesCount: Math.floor(Math.random() * 2000), date: 'October 20, 1999' },
        { id: 3, post: 'Today I met my new nakama. His name\`s Roronoa Zoro', likesCount: Math.floor(Math.random() * 3000), date: 'November 17, 1999' },
        { id: 4, post: 'I defeated morgan', likesCount: Math.floor(Math.random() * 1000), date: 'November 24, 1999' }
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
                <Post message={postsData[3].post} like={postsData[3].likesCount} date={postsData[3].date} />
                <Post message={postsData[2].post} like={postsData[2].likesCount} date={postsData[2].date} />
                <Post message={postsData[1].post} like={postsData[1].likesCount} date={postsData[1].date} />
                <Post message={postsData[0].post} like={postsData[0].likesCount} date={postsData[0].date} />
            </div>
        </div>)
}