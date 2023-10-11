import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

interface ISidebar {
  className?: string,
  showSideBar: boolean
}

function Sidebar({className, showSideBar}:ISidebar) {
  const classNames = `sidebar ${className ? className : ""} ${showSideBar ? "sidebar--show" : "sidebar--hide"}`;
  return (
    <aside className={classNames}>
      <nav className="sidebar__list">
        <NavLink className="sidebar__item" to='/'><CgProfile size={20}/><span className="sidebar__path">Profile</span></NavLink>
      </nav> 
    </aside>
  )
}

export default Sidebar