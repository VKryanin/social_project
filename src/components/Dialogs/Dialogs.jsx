import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    // return <div id='test' className = {s.dialog} >
    return <div id='test' className = {test=>{console.log("test", test); return s.dialog}} >
        <NavLink to={path} className={msg => msg.isActive ? s.active : s.passive}>
            {/* <div className={test => test.isActive ? s.container : s.container}> */}
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
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = (props) => {

    let dialogs = [
        { id: 'id1', name: 'Roronoa Zoro', photo: 'https://i.pinimg.com/originals/39/72/f8/3972f81d4123278662c34eb40a25f0fd.jpg' },
        { id: 'id2', name: 'Nami', photo: 'https://qph.cf2.quoracdn.net/main-qimg-cfb83d19fb9211e2129bc5000ccb3fd7-lq' },
        { id: 'id3', name: 'Usopp', photo: 'https://i.pinimg.com/originals/d6/a8/6d/d6a86d1785e5ea99bfb40c0cb998cb7d.jpg' },
        { id: 'id4', name: 'Vinsmoke Sanji', photo: 'https://i.pinimg.com/736x/51/20/be/5120beb6e4806cc1c4116fb31ef2240e.jpg' },
        { id: 'id5', name: 'Tony Chopper', photo: 'https://i.pinimg.com/originals/27/c2/eb/27c2eba8140ebe9fb49a70d46b0bf898.png' },
        { id: 'id6', name: 'Nico Robin', photo: 'https://i.pinimg.com/originals/a9/ba/23/a9ba23b80a87b3c9871699d2c6b421a4.jpg' },
        { id: 'id7', name: 'Franky', photo: 'https://i.pinimg.com/564x/03/5b/40/035b40228c942eb12eaa649460d9ffe5.jpg' },
        { id: 'id8', name: 'Brook', photo: 'https://i.pinimg.com/originals/16/01/39/16013909cf63f579d537c710ee3d606f.jpg' },
        { id: 'id9', name: 'Jinbe', photo: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/12/162612956.jpg' }
    ]
    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = messages.map(messenge => <Message message={messenge.message} />);

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
