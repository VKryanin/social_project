import s from './../../blocks/dialogs/Dialogs.module.css';
import button from './../../blocks/button/Button.module.css'
import textarea from '../../blocks/textarea/Textarea.module.css'
import React from "react";
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { Message } from './Message/Message.jsx'
import { updateNewMessageActionCreator, addMessageActionCreator } from '../../redux/state'


export const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = props.dialogsPage.messages.map(msg => <Message message={msg.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onChangeMessage = () => {
        let msg = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(msg)
        props.dispatch(action)
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
                        <textarea className={textarea.textarea} onChange={onChangeMessage} value={props.dialogsPage.newMessageText} ref={newMessageElement} placeholder='Напиши что нибудь' />
                    </div>
                    <div>
                        <button className={button.button} onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
