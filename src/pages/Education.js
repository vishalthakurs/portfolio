
import { School } from '@mui/icons-material'
import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../styles/education.css'

const Education = () => {
  return (
    <div className='education'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2014-2018'
        iconStyle={{background:'#3e497a', color:'#fff'}}
        icon={<School />}
        >
            <h3 className='vertical-timeline-element-title'>MLR Institute Of Technology, Hyderabad, India</h3>
            <p>B.tech (Computer Science and Engineering)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2012-2014'
        iconStyle={{background:'#3e497a', color:'#fff'}}
        icon={<School />}
        >
            <h3 className='vertical-timeline-element-title'>Narayana Junior College, Hyderabad, India</h3>
            <p>Intermediate(M.P.C)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2012'
        iconStyle={{background:'#3e497a', color:'#fff'}}
        icon={<School />}
        >
            <h3 className='vertical-timeline-element-title'>Gowtham Model School, Hyderabad, India</h3>
            <p>HighSchool</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
