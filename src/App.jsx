import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Navbar } from './components/Navbar/nav.jsx';
import { Profile } from './components/Profile/Profile.jsx';
import React from 'react';



function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}



export default App;
