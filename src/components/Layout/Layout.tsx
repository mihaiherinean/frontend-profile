import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Layout.css';

interface ILayout {
  children: React.ReactNode
}

function Layout({children}:ILayout) {
    return (
    <div className="layout">
      <Sidebar className="layout__sidebar"/>
      <header className="layout__header"></header>
      <main className="layout__scroll">
        <div className="layout__content"> 
          {children}
        </div>
      </main>
    </div>
  );}
export default Layout