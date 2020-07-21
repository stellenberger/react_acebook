import React from 'react'
import LeftSection from './homeSections/LeftSection'
import MiddleSection from './homeSections/MiddleSection'
import RightSection from './homeSections/RightSection'

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