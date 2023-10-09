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
      <div className="asset__wrapper" onClick={hasExpand ? () => setExpand(!expand) : undefined}>
        <h2 className="asset__name">
          {asset.name} <span className="asset__number">{"(" + asset.info.length + ")"}</span>
        </h2>
        
          {expand ? (
            <MdOutlineExpandLess size={40}/>
          ) : (
            <MdOutlineExpandMore size={40}/>
          )}
        
      </div>
        {expand ? (
          <div className="asset__list">
            {asset.info.map((data) => (
              <InfoAsset info={data} />
            ))}
          </div>
        ) : null}
    </div>
  );
}

export default Asset;
