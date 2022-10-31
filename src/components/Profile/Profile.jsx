import profile from './Profile.module.css'
import React from 'react';
import { MyPosts } from './MyPosts/MyPosts.jsx'
import { Profileinfo } from './ProfileInfo/Profileinfo';

export const Profile = (props) => {
  return (
    <div className={profile.content}>
      <Profileinfo name={props.profilePage.name} />
      <MyPosts posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost} />
    </div>
  )
}
