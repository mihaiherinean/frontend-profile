import React from "react";
import "./Asset.css";
import { IAsset } from "../../../../types/IAsset";
import InfoAsset from "./components/InfoAsset";
 
interface IAssetT {
  asset: IAsset;
  className?: string;
}
function Asset({ asset, className }: IAssetT) {
  const classNames = `asset ${className ? className : ""}`;
  
  return (
    <div className={classNames}>
      <div className="asset__wrapper">
        <h2 className="asset__name">
          {asset.name} <span className="asset__number">{"(" + asset.info.length + ")"}</span>
        </h2>
      </div>
          <div className="asset__list">
            {asset.info.map((data) => (
              <InfoAsset info={data} />
            ))}
          </div>
    </div>
  );
}

export default Asset;
