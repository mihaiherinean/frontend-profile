import React from 'react'
import './Skill.css';

interface ISkill {
  skill: string,
  className?: string
}

function Skill({skill, className}:ISkill) {
  const classNames = `skill ${className ? className : ""}`;
  return (
    <span className={classNames}>{skill}</span>
  )
}

export default Skill