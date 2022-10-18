import profile from './Profile.module.css'
import React from 'react';
import { MyPosts } from './MyPosts/MyPosts.jsx'
import { Profileinfo } from './ProfileInfo/Profileinfo';

export const Profile = (props) => {

  let posts = [
    { id: 4, author: 'Monkey D. Luffy', post: 'I defeated Morgan', likesCount: Math.floor(Math.random() * 1000), date: 'November 24, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
    { id: 3, author: 'Monkey D. Luffy', post: 'Today I met my new nakama. His name\`s Roronoa Zoro', likesCount: Math.floor(Math.random() * 3000), date: 'November 17, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
    { id: 2, author: 'Monkey D. Luffy', post: 'I\'ll become king of the pirates', likesCount: Math.floor(Math.random() * 2000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
    { id: 1, author: 'Monkey D. Luffy', post: 'Hello! I\`m Monkey D. Luffy', likesCount: Math.floor(Math.random() * 1000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' }
  ]

  return (
    <div className={profile.content}>
      <Profileinfo name={props.name} />
      <MyPosts posts={posts}/>
    </div>
  )
}
