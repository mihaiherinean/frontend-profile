import React from 'react'
import { IUser } from '../../types/IUser'
interface IProjects {
  userData: IUser;
}

function Projects({userData}:IProjects) {

  return (
    <div>
      <h3>This page is under construction. Check back soon!</h3>
    </div>
  )
}

export default Projects