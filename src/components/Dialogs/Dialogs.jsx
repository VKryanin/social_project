import s from './Dialogs.module.css';
import React from "react";
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { Message } from './Message/Message.jsx'
import { type } from '@testing-library/user-event/dist/type';


export const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = props.dialogsPage.messages.map(msg => <Message message={msg.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        // props.addMessage();
        props.dispatch({type: 'ADD-MESSAGE'})
    }
    let onChangeMessage = () => {
        let msg = newMessageElement.current.value;
        // props.updateNewMessage(msg);
        props.dispatch({type: 'UPDATE-NEW-MESSAGE', newMsg: msg})
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
                <div>
                    <div>
                        <textarea onChange={onChangeMessage} value={props.dialogsPage.newMessageText} ref={newMessageElement} placeholder='Напиши что нибудь'/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
