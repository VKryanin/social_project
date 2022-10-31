import s from './Dialogs.module.css';
import React from "react";
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { Message } from './Message/Message.jsx'


export const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = props.dialogsPage.messages.map(msg => <Message message={msg.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onChangeMessage = () => {
        let msg = newMessageElement.current.value;
        props.updateNewMessage(msg);
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
                        <textarea onChange={onChangeMessage} value={props.dialogsPage.newMessageText} ref={newMessageElement} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
