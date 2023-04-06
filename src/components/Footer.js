import React from 'react'
import { Instagram,Twitter,Facebook,GitHub } from '@mui/icons-material'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='/'><Instagram /></a>
        <a href='/'><Twitter /></a> 
        <a href='/'><Facebook /></a>
        <a href="https://github.com/vishalthakurs"><GitHub /></a>
      </div>
      <p> &copy; 2022 vishalslearning.com</p>
    </div>
  )
}

export default Footer
