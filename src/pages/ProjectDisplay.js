import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import '../styles/projectDisplay.css'
import { useNavigate } from 'react-router-dom';

const ProjectDisplay = () => {
    const { id }=useParams();
    const project=ProjectList[id];
    const navigate=useNavigate()
  return (
    <div className='project' >
      <h1>{project.name}</h1>
      <img src={project.image} alt=''></img>
      <p>Skills:
        {
           project.skills 
        }
      </p>
      <a href='https://github.com/vishalthakurs/social-connect'><GitHub /></a>
    </div>
  )
}

export default ProjectDisplay
