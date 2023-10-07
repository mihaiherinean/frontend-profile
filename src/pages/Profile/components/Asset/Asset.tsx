import React from 'react'
import './Asset.css';
import { IAsset } from '../../../../types/IAsset';
import InfoAsset from './components/InfoAsset';

interface IAssetT {
    asset: IAsset,
    className?: string
}
function Asset({asset, className}:IAssetT) {
    const classNames = `asset ${className ? className : ''}`;
  return (
    <div className={classNames}>
        <h2 className="asset__name">{asset.name}</h2>
        {asset.info.map(data => (
          <InfoAsset info={data}/>
        ))}
    </div>
  )
}

export default Asset