import {rerenderEntireTree} from './render'


let state = {
    profilePage: {
        posts: [
            { id: 4, author: 'Monkey D. Luffy', post: 'I defeated Morgan', likesCount: Math.floor(Math.random() * 1000), date: 'November 24, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
            { id: 3, author: 'Monkey D. Luffy', post: 'Today I met my new nakama. His name\`s Roronoa Zoro', likesCount: Math.floor(Math.random() * 3000), date: 'November 17, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
            { id: 2, author: 'Monkey D. Luffy', post: 'I\'ll become king of the pirates', likesCount: Math.floor(Math.random() * 2000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' },
            { id: 1, author: 'Monkey D. Luffy', post: 'Hello! I\`m Monkey D. Luffy', likesCount: Math.floor(Math.random() * 1000), date: 'October 20, 1999', photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg' }
        ]
    }
    ,
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are u?' },
            { id: 3, message: 'yo' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'yo' }
        ],
        dialogs: [
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
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        post: postMessage,
        likesCount: Math.floor(Math.random() * 1000),
        author: 'Monkey D. Luffy',
        photo: 'https://i.pinimg.com/564x/67/89/71/67897168a4d6ef6f8d9c8b132562dac0.jpg',
        date: 'there is should be the date'
    };
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state);
}


export default state;