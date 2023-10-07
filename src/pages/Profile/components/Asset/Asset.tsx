import React, { useState } from "react";
import "./Asset.css";
import { IAsset } from "../../../../types/IAsset";
import InfoAsset from "./components/InfoAsset";
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';
 
interface IAssetT {
  asset: IAsset;
  className?: string;
}
function Asset({ asset, className }: IAssetT) {
  const classNames = `asset ${className ? className : ""}`;
  const [expand, setExpand] = useState(true);
  const hasExpand = asset.info.length >= 1 ? true : false;
  return (
    <div className={classNames}>
      <div className="asset_wrapper" onClick={hasExpand ? () => setExpand(!expand) : undefined}>
        <h2 className="asset__name">
          {asset.name + " (" + asset.info.length + ")"}
        </h2>
        {hasExpand ? (
          expand ? (
            <MdOutlineExpandLess size={40}/>
          ) : (
            <MdOutlineExpandMore size={40}/>
          )
        ) : null}
      </div>
      {hasExpand ? (
        expand ? (
          <div className="asset__list">
            {asset.info.map((data) => (
              <InfoAsset info={data} />
            ))}
          </div>
        ) : null
      ) : (
        <div className="asset__list">
          {asset.info.map((data) => (
            <InfoAsset info={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Asset;
