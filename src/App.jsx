import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Navbar } from './components/Navbar/nav.jsx';
import { Profile } from './components/Profile/Profile.jsx';
import { Dialogs } from './components/Dialogs/Dialogs.jsx';
import { News } from './components/News/News.jsx';
import { Music } from './components/Music/Music'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { addPost } from './redux/state';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
