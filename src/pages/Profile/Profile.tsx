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
        <About userData={userData} className="highlight-margin"/>
        <Basic userData={userData} className="highlight-margin"/>
      </div>
      <div className="profile__assets">
          {userData.assets.map(asset => (
            <Asset asset={asset} className="highlight-margin"/>
          ))}
      </div>
    </div>
  )
}

export default Profile