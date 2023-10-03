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
      <header className="layout__header">
        <h1 className="layout__headerTitle"> {'<'}MihaiH{'/>'}</h1>
      </header>
      <main className="layout__scroll">
        <div className="layout__content"> 
          {children}
        </div>
      </main>
    </div>
  );}
export default Layout