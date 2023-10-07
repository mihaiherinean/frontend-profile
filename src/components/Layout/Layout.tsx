import React, {useState}  from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import './Layout.css';

interface ILayout {
  children: React.ReactNode
}

function Layout({children}:ILayout) {
  const [showSideBar, setShowSideBar] = useState(false);
    return (
    <div className="layout">
      <Sidebar showSideBar={showSideBar}/>
      <header className="layout__header">
       {!showSideBar && <RxHamburgerMenu size={30} className="layout__menu" onClick={() =>setShowSideBar(!showSideBar)}/>}
       {showSideBar && <AiOutlineClose size={30} className="layout__menu" onClick={() =>setShowSideBar(!showSideBar)}/>}

      </header>
      <main className={`layout__scroll ${showSideBar ? "layout__scroll--stay" : "layout__scroll--move"}`}>
        <div className="layout__content"> 
          {children}
        </div>
      </main>
    </div>
  );}
export default Layout