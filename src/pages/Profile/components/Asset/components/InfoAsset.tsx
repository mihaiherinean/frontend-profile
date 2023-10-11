import React, { useState } from "react";
import "./InfoAsset.css";
import { IInfo } from "../../../../../types/IInfo";
import {BsPlusLg} from 'react-icons/bs';
import {BiMinus} from 'react-icons/bi';

interface IInfoAsset {
  info: IInfo;
  className?: string;
}

function InfoAsset({ info, className }: IInfoAsset) {
  const classNames = `infoAsset ${className ? className : ""}`;
  const [expand, setExpand] = useState(true);
  const hasExpand = info.description.length >= 2 ? true : false;
  return (
    <div className={classNames}>
      <div className="infoAsset__wrapper">
        <div className="infoAsset__expander">
          <div className="infoAsset__imgWrapper">
            <img src={info.image} alt="" className="infoAsset__img" />
          </div>
          <div className="infoAsset__informations">
            <h3 className="infoAsset__title">{info.title}</h3>
            <p className="infoAsset__subtitle">{info.subtitle}</p>
            <p className="infoAsset__period">
              {info.period.start + " - " + info.period.end}
            </p>
          </div>
        </div>
        {hasExpand ? (
          expand ? (
            <BiMinus
              className="infoAsset__expand"
              size={20}
              onClick={() => setExpand(!expand)}
            />
          ) : (
            <BsPlusLg
              className="infoAsset__collapse"
              size={20}
              onClick={() => setExpand(!expand)}
            />
          )
        ) : null}
      </div>
      {hasExpand ? (
        expand ? (
          info.description.map((paragraph) => (
            <p className="infoAsset__description"> {paragraph} </p>
          ))
        ) : null
      ) : (
        <p className="infoAsset__description"> {info.description} </p>
      )}
    </div>
  );
}

export default InfoAsset;
