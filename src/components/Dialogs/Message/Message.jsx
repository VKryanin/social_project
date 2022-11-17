import s from '../../../blocks/dialogs/Dialogs.module.css';
import React from "react";


export const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

