import React from 'react'
import './InfoAsset.css';
import { IInfo } from '../../../../../types/IInfo';

interface IInfoAsset {
    info: IInfo,
    className?: string
}

function InfoAsset({info, className}:IInfoAsset) {
  const classNames = `infoAsset ${className ? className : ''}`;
  return (
    <div className={classNames}>
      <div className="infoAsset__wrapper">
        <div className="infoAsset__imgWrapper">
            <img src={info.image} alt="" className="infoAsset__img"/>
        </div>
        <div className="infoAsset__informations">
            <h3 className="infoAsset__title">{info.title}</h3>
            <p className="infoAsset__subtitle">{info.subtitle}</p>
            <p className="infoAsset__period">{info.period.start + ' - ' + info.period.end}</p>
        </div>
      </div>
      <p className="infoAsset__description">
        {info.description}
      </p>
    </div>
  )
}

export default InfoAsset