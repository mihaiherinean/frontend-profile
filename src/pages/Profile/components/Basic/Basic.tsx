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
      <h2 className="basic__title">Basic information</h2>
      <table className="basic__informations">
        <tr className="basic__infoWrapper">
          {Object.keys(userData.generalInfo).slice(0,3).map((key, value) => (
              <Info name={key} value={Object.values(userData.generalInfo)[value].toString()}/>
            ))}
        </tr>
        <tr className="basic__infoWrapper">
          {Object.keys(userData.generalInfo).slice(3).map((key, value) => (
              <Info name={key} value={Object.values(userData.generalInfo).slice(3)[value].toString()}/>
            ))}
        </tr>
      </table>
    </div>
  )
}

export default Basic