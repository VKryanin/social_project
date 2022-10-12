import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return <nav className={style.nav}>
    <div className={style.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? style.active : style.item }>Profile</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? style.active : null }>Messages</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/news' className = { navData => navData.isActive ? style.active : null }>News</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/music' className = { navData => navData.isActive ? style.active : null }>Music</NavLink>
    </div>
    <div className={style.item}>
      <NavLink to='/setting' className = { navData => navData.isActive ? style.active : style.item }>Setting</NavLink>
    </div>
  </nav>
}