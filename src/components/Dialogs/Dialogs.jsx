import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img className={s.photo} src={props.photo} alt="photo" />
                </div>
                <div className={s.username}>
                    <p>{props.name}</p>
                </div>
            </div>
        </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = (props) => {
    let dialogs = [
        { id: 'id1', name: 'Roronoa Zoro', photo: 'https://i.pinimg.com/originals/39/72/f8/3972f81d4123278662c34eb40a25f0fd.jpg' },
        { id: 'id2', name: 'Nami', photo: 'https://sun9-23.userapi.com/impf/c639530/v639530594/615c4/q-ET9Kzlmig.jpg?size=540x540&quality=96&sign=68472e2a989677fbb07bc228eed45305&type=album' },
        { id: 'id3', name: 'Usopp', photo: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/One-Piece-Usopp.jpg' },
        { id: 'id4', name: 'Vinsmoke Sanji', photo: 'https://i.pinimg.com/736x/51/20/be/5120beb6e4806cc1c4116fb31ef2240e.jpg' },
        { id: 'id5', name: 'Tony Chopper', photo: 'https://preview.redd.it/6mhixv0a45v81.jpg?width=640&crop=smart&auto=webp&s=15b1d503b90b4ad5809df609187dfb12fbbfbeb9' },
        { id: 'id6', name: 'Nico Robin', photo: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/one-piece-nico-robin-header.jpg' },
        { id: 'id7', name: 'Franky', photo: 'https://i.pinimg.com/564x/03/5b/40/035b40228c942eb12eaa649460d9ffe5.jpg' },
        { id: 'id8', name: 'Brook', photo: 'https://i.pinimg.com/originals/16/01/39/16013909cf63f579d537c710ee3d606f.jpg' },
        { id: 'id9', name: 'Jinbe', photo: 'https://practicaltyping.com/wp-content/uploads/2018/09/jinbe.png' }
    ]
    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

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
            </div>
        </div>
    )
}
