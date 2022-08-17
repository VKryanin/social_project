import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : null }>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' className = { navData => navData.isActive ? s.active : null }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className = { navData => navData.isActive ? s.active : null }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/setting' className = { navData => navData.isActive ? s.active : s.item }>Setting</NavLink>
    </div>
  </nav>
}