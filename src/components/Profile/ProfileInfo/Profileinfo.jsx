import s from './Profileinfo.module.css'
import React from 'react';
import first from './luffy.png';
import second from './luffy2.png'
import logo from './onepiece.png'
  


export const Profileinfo = (props) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.first} src={first} />
        <img src={second} alt=""  />
      </div>
      <div className={s.descriptionBlock}>
        {props.name}
      </div>
    </div>
  )
}
