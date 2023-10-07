import React from 'react'
import './Asset.css';
import { IAsset } from '../../../../types/IAsset';

interface IAssetT {
    asset: IAsset,
    className?: string
}
function Asset({asset, className}:IAssetT) {
    const classNames = `asset ${className ? className : ''}`;
  return (
    <div className={classNames}>
        <h2 className="asset__name">{asset.name}</h2>
        <div className="asset__wrapper">
            <div className="asset__imgWrapper">
                <img src={asset.image} alt="" className="asset__img"/>
            </div>
            <div className="asset__informations">
                <h3 className="asset__title">{asset.title}</h3>
                <p className="asset__subtitle">{asset.subtitle}</p>
                <p className="asset__period">{asset.period.start + ' - ' + asset.period.end}</p>
            </div>
        </div>
    </div>
  )
}

export default Asset