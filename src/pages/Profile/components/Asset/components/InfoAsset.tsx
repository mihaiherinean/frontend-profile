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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa nihil suscipit iure placeat voluptatum ex? Libero placeat sunt dolorum ex, tempore facilis harum laudantium modi dolorem. Debitis, quidem consequatur.
        Est accusamus alias illo velit error maxime esse praesentium doloribus ad quidem tenetur quo odio harum molestias accusantium, ipsum repudiandae a iure, nisi ducimus? Dolor atque omnis facilis nostrum deleniti.
      </p>
    </div>
  )
}

export default InfoAsset