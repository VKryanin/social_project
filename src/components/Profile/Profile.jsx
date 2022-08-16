import profile from './Profile.module.css'
import React from 'react';
import { MyPosts } from './MyPosts/MyPosts.jsx'

export const Profile = () => {
    return <div className={profile.content} >
      <div>
        <img src='https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg'/>
      </div>
      <div>
        ava
      </div>
      <MyPosts />
  </div>
}
