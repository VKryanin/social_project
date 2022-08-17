import s from './Dialogs.module.css';
import React from "react";


export const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>Sergey</div>
                    <div className={s.dialog}>Alina</div>
                    <div className={s.dialog}>Andrey</div>
                    <div className={s.dialog}>Tolya</div>
                    <div className={s.dialog}>Ksusha</div>
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