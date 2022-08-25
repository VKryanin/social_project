import s from './Header.module.css';
import React from 'react';
import logo from './pngwing.png'

export const Header= () => {
    return  <header className={s.header}>
    <img src={logo}/>
    </header>
}