import React from 'react'
import { Email,GitHub,Phone } from '@mui/icons-material'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Vishal</h2>
        <div className='prompt'>
          <p> A software developer with passion for learning and creating</p>
          <a href='https://gmail.com/vishalsingh041@gmail.com' ><Email /></a>
          <a href='https://github.com/vishalthakurs'><GitHub  /></a>
          <Phone onclick={()=>{
            alert('+919703352650')
          }}/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> Java Spring, MySQL, OracleDB, Firebase,Hibernate</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, JavsScript, C,</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home
