import React from 'react'
import './Basic.css';
import { IUser } from '../../../../types/IUser';

interface IBasic {
  userData: IUser;
  className?: string
}

function Basic({userData, className}:IBasic) {
  const classNames = `basic ${className ? className : ""}`;
  return (
    <div className={classNames}>
      <h2 className="basic__title">Basic information</h2>
    </div>
  )
}

export default Basic