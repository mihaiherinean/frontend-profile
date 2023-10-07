import React from 'react'
import { IUser } from '../../types/IUser'
import './Profile.css';
import About from './components/About/About';
import Basic from './components/Basic/Basic';
import Asset from './components/Asset/Asset';
interface IProfile {
  userData: IUser;
  className?: string
}

function Profile({userData, className}:IProfile) {
  const classNames = `profile ${className ? className : ""}`;
  return (
    <div className={classNames}>
      <div className="profile__generalInformations">
        <About userData={userData}/>
        <Basic userData={userData}/>
      </div>
      <div className="profile__assets">
          {userData.assets.map(asset => (
            <Asset asset={asset}/>
          ))}
      </div>
    </div>
  )
}

export default Profile