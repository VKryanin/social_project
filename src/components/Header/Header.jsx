import React from 'react';
import logo from './pngwing.png'
import style from '../../blocks/header/Header.module.css';

export const Header= () => {
    return  <header className={style.header}>
    <img src={logo}/>
    </header>
}