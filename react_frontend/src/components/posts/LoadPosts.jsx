import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LoadPosts = () => {
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
    <div>
      {posts === null ? null : posts.map(post => {
        return (
          <div>{post.content}</div>
        )
      })}
    </div>
  )
}

export default LoadPosts