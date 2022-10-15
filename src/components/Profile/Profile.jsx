import profile from './Profile.module.css'
import React from 'react';
import { MyPosts } from './MyPosts/MyPosts.jsx'
import { Profileinfo } from './ProfileInfo/Profileinfo';

export const Profile = () => {
  return (
    <div className={profile.content}>
      <Profileinfo />
      <MyPosts />
    </div>
  )
}
