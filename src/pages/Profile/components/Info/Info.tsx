import React from 'react'
import './Info.css';
import { getUnit } from '../../../../utils/getValueAndUnit';

interface IInfo {
  name: string | any,
  value: string | number,
  className?: string
}

function Info({name, value, className}:IInfo) {
  const classNames = `info ${className ? className : ""}`;
  return (
    <td className={classNames}>
      <p className="info__name">{name}</p>
      <p className="info__value">{value + " " + getUnit(name)}</p>
    </td>
  )
}

export default Info