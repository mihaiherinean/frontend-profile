import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineWorkOutline } from 'react-icons/md';

interface ISidebar {
  className?: string
}

function Sidebar({className}:ISidebar) {
  const classNames = `sidebar ${className ? className : ""}`;
  return (
    <aside className={classNames}>
      <nav className="sidebar__list">
        <NavLink className="sidebar__item" to='/'><CgProfile size={20}/><span className="sidebar__path">Profile</span></NavLink>
        <NavLink className="sidebar__item" to='/projects'><MdOutlineWorkOutline size={20} /> <span className="sidebar__path">Projects</span></NavLink>
      </nav> 
    </aside>
  )
}

export default Sidebar