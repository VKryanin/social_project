import s from './Dialogs.module.css';
import React from "react";
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { Message } from './Message/Message.jsx'


export const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = props.state.messages.map(msg => <Message message={msg.message} />);

    let newMessangeElement = React.createRef();
    let sendMessange = () => {
        let text = newMessangeElement.current.value;
        alert(text)
    };
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
                        <textarea ref={newMessangeElement}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessange}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
