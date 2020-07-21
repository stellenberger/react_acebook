import React from 'react'
import WritePost from '../../posts/WritePost'
import LoadPosts from '../../posts/LoadPosts'

const MiddleSection = () => {
  return (
    <div className='home-middle-section'>
      I am the middle section and you will see all the posts here
      <WritePost />
      <LoadPosts />
    </div>
  )
}

export default MiddleSection