import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadPosts from '../../posts/LoadPosts'
import { StatusCard } from '../../index'
import './Sections.scss'

const MiddleSection = () => {
  const [posts, setPosts] = useState(null)

  const url = process.env.REACT_APP_URL

  useEffect(() => {
    retrievePosts()
  }, [])

  const retrievePosts = () => {
    axios.get(url + '/posts', { withCredentials: true })
      .then(response => {
        console.log('posts successfully retrieved', response)
        setPosts(response.data)
      })
      .catch(error => {
        console.log('there was an error retrieving the posts', error)
      })
  }

  return (
    <div className='home-middle-section-container'>
      <StatusCard retrievePosts={retrievePosts}/>
      <LoadPosts posts={posts}/>
    </div>
  )
}

export default MiddleSection