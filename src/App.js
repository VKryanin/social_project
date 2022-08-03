import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
        <header className='header'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/800px-ZDF_logo%21_Logo_2021.svg.png'/>
        </header>
        <nav className='nav'>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Setting</a>
          </div>
        </nav>
        <div className='content'>Main content</div>
    </div>
  );
}

export default App;
