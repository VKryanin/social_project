import s from '../../../blocks/dialogs/Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div id='test' className = {s.dialog} >
        <NavLink to={path} className={msg => msg.isActive ? s.active : s.passive}>
                <div className={s.avatar}>
                    <img className={s.photo} src={props.photo} alt="photo" />
                </div>
                <div className={s.username}>
                    <p>{props.name}</p>
                </div>
        </NavLink>
    </div>
}

