import cl from './Navbar.module.css'

export function Navbar() {
  return <nav className={cl.nav}>
    <div className={cl.item}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={`${cl.item} ${cl.active}`}>
      <a href='/dialogs'>Messages</a>
    </div>
    <div className={cl.item}>
      <a href='/news' >News</a>
    </div>
    <div className={cl.item}>
      <a href='/music'>Music</a>
    </div>
    <div className={cl.item}>
      <a href='/setting' >Setting</a>
    </div>
  </nav>
}