import React from 'react'
import { IUser } from '../../../../types/IUser';
import './About.css';
import Skill from '../Skill/Skill';

interface IAbout {
  userData: IUser;
  className?: string
}

function About({userData, className}:IAbout) {
  const classNames = `about ${className ? className : ""}`;
  return (
    <div className={classNames}>
      <div className="about__imgWrapper">
        <img src={userData.imgUrl} alt="profile" className="about__img"/>
      </div>
      <div className="about__positionNameWrapper">
        <p className="about__fullName">{userData.firstName + " " + userData.lastName}</p>
        <p className="about__position">{userData.position}</p>
      </div>
      <div className="">{userData.description.map(para => (
         <p className="about__description">{para}</p>
      ))}</div>
  
      <h3 className="about__subtitle">Skills</h3>
      <div className="about__skillsWrapper">
        {userData.skills.map((skill) => (
          <Skill skill={skill} key={skill} className="about__skill"/>
        ))}
      </div>
    </div>
  )
}

export default About