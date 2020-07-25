import React from 'react'

const LoadPosts = ({posts}) => {
  return (
    <div>
      {posts && posts.map(post => {
        return (
          <div key={post.id}>{post.content}</div>
        )
      })}
    </div>
  )
}

export default LoadPosts