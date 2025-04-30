import React from 'react'
import AboutMain from '../components/AboutMain'
import ExportProducts from '../components/ExportProducts'
import VisionAndMission from '../components/VisionAndMission'
import Team from '../components/Team'
import Award from '../components/Award'

const About = () => {
  return (
    <div className='bg-black'>
        <AboutMain/>
        <ExportProducts/>
        <VisionAndMission/>
        <Team/>
        <Award/>
    </div>
  )
}

export default About
