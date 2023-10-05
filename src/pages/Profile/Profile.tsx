import React from 'react'
import { IUser } from '../../types/IUser'
import './Profile.css';
import About from './components/About/About';
import Basic from './components/Basic/Basic';
interface IProfile {
  userData: IUser;
  className?: string
}

function Profile({userData, className}:IProfile) {
  const classNames = `profile ${className ? className : ""}`;
  return (
    <div className={classNames}>
        <About userData={userData}/>
        <Basic userData={userData}/>
    </div>
  )
}

export default Profile