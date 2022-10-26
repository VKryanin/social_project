import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return <nav className={style.nav}>
    <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
    <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
    <NavLink to='/news' className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
    <NavLink to='/music' className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
    {/* <div className={style.item}> */}
    <NavLink to='/setting' className={navData => navData.isActive ? style.active : style.item}>Setting</NavLink>
    {/* </div> */}
  </nav>
}