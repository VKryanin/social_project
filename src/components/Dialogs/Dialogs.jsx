import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


export const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Ksusha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Tolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Alina</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>How us your name</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    )
}

// export default Dialogs;