import React from 'react'
import './Basic.css';
import { IUser } from '../../../../types/IUser';
import Info from '../Info/Info';

interface IBasic {
  userData: IUser;
  className?: string
}

function Basic({userData, className}:IBasic) {
  const classNames = `basic ${className ? className : ""}`;
  return (
    <div className={classNames}>
      <h2 className="basic__title">General information</h2>
      <div className="basic__informations">
          {Object.keys(userData.generalInfo).map((key, value) => (
              <Info name={key} value={Object.values(userData.generalInfo)[value].toString()}/>
            ))}
        </div>
      <div className="basic__imageWrapper">
            <img src={userData.favoriteImage} alt="" className="basic__favoriteImage"/>
      </div>
    </div>
  )
}

export default Basic