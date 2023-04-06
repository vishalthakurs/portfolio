import React from 'react'
import ProjectItem from '../components/ProjectItem'

import { ProjectList } from '../helpers/ProjectList'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project,idx)=>
        <ProjectItem name={project.name} image={project.image} id={idx}></ProjectItem>)}
      </div>
    </div>
  )
}

export default Projects
