import profile from './Profile.module.css'
import React from 'react';
import { MyPosts } from './MyPosts/MyPosts.jsx'
import { Profileinfo } from './ProfileInfo/Profileinfo';

export const Profile = (props) => {
  return (
    <div className={profile.content}>
      <Profileinfo name={props.state.name} />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  )
}
