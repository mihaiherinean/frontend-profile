import React from "react";
import "./Info.css";
import { getUnit } from "../../../../utils/getUnit";

interface IInfo {
  name: string | any;
  value: string | number;
  className?: string;
}

function Info({ name, value, className }: IInfo) {
  const classNames = `info ${className ? className : ""}`;
  const github = name === "github" ? value.toString() : null;
  return (
    <div className={classNames}>
      <p className="info__name">{name}</p>
      {github ? (
        <a href={"https://" + github} className="info__valueLink" target="_blank" rel="noreferrer">{github}</a>
      ) : (
        <p className="info__value">{value + " " + getUnit(name)}</p>
      )}
    </div>
  );
}

export default Info;
