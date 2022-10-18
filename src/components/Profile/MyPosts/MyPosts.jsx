import React from 'react'
import s from './MyPosts.module.css'


export const MyPosts = (props) => {

    let wallitems = props.posts.map(p => <Wall author={p.author} photo={p.photo} date={p.date} post={p.post} like={p.likesCount} />);
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {wallitems}
        </div>
    )
}

export const Wall = (props) => {
    return (
        <div className={s.conteiner}>

            <div className={s.about}>
                <div className={s.photo}>
                    <img src={props.photo} alt="test" />
                </div>
                <div className={s.author}>
                    {props.author}
                </div>
            </div>
            <div className={s.post}>
                <div className={s.textPost}>
                    <span>{props.post}</span>
                </div>
                <div className={s.info}>
                    <div className={s.date}>
                        <span>{props.date}</span>
                    </div>
                    <div className={s.likesCount}>
                        <p> <span>Likes:</span>  {props.like} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}













// export const MyPosts = () => {
//     let postsData = [
//         { id: 1, post: 'Hello! I\`m Monkey D. Luffy', likesCount: Math.floor(Math.random() * 1000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
//         { id: 2, post: 'I\'ll become king of the pirates', likesCount: Math.floor(Math.random() * 2000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
//         { id: 3, post: 'Today I met my new nakama. His name\`s Roronoa Zoro', likesCount: Math.floor(Math.random() * 3000), date: 'November 17, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
//         { id: 4, post: 'I defeated Morgan', likesCount: Math.floor(Math.random() * 1000), date: 'November 24, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' }
//     ]

//     return (
//         <div className={s.postsBlock} >
//             <h3>My posts</h3>
//             <div>
//                 <div>
//                     <textarea></textarea>
//                 </div>
//                 <div>
//                     <button>Add post</button>
//                 </div>
//             </div>
//             <div className={s.posts}>
//                 <Post message={postsData[3].post} like={postsData[3].likesCount} date={postsData[3].date} />
//                 <Post message={postsData[2].post} like={postsData[2].likesCount} date={postsData[2].date} />
//                 <Post message={postsData[1].post} like={postsData[1].likesCount} date={postsData[1].date} />
//                 <Post message={postsData[0].post} like={postsData[0].likesCount} date={postsData[0].date} />
//             </div>
//         </div>)
// }