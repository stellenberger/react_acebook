import React from 'react'
import { PostCard } from '../index.jsx'

const LoadPosts = ({posts}) => {
  return (
    <div>
      {posts && posts.map(post => {
        return (
          <PostCard post={post}/>
        )
      })}
    </div>
  )
}

export default LoadPosts