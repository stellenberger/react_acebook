import React from 'react'
import { LeftSection, MiddleSection, RightSection } from '../index'
import './Home.scss'

const Home = () => {
  return (
    <div className='homepage-devider'>
       <LeftSection />
       <MiddleSection />
       <RightSection />
    </div>
  )
}

export default Home