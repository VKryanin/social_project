import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path ='/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <DialogItem name='Ksusha' id='1' />
                <DialogItem name='Misha' id='2' />
                <DialogItem name='Andrey' id='3' />
                <DialogItem name='Tolya' id='4' />
                <DialogItem name='Alina' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How us your name'/>
                <Message message='Yo'/>
                <Message message='eeeee boy'/>
            </div>
        </div>
    )
}

// export default Dialogs;