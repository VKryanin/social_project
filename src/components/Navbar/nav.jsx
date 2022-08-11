import cl from './Navbar.module.css'

export function Navbar() {
  return <nav className={cl.nav}>
    <div className={cl.item}>
      <a>Profile</a>
    </div>
    <div className={`${cl.item} ${cl.active}`}>
      <a>Messages</a>
    </div>
    <div className={cl.item}>
      <a>News</a>
    </div>
    <div className={cl.item}>
      <a>Music</a>
    </div>
    <div className={cl.item}>
      <a>Profile</a>
    </div>
    <div className={cl.item}>
      <a>Setting</a>
    </div>
  </nav>
}