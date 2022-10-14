import profile from './Profile.module.css'
import React from 'react';
// import { MyPosts } from './MyPosts/MyPosts.jsx'
import { Profileinfo } from './ProfileInfo/Profileinfo';
import { Postofwall } from './MyPosts/MyPosts.jsx'

export const Profile = () => {
  return (
    <div className={profile.content}>
      <Profileinfo />
      {/* <MyPosts /> */}
      < Postofwall />
    </div>
  )
}
