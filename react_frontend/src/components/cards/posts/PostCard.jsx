import React from 'react'
import './PostCard.scss'

const PostCard = ({post}) => {
  return (
    <div key={post.id} className='post-card-container'>
      <div className="name-tag-and-profile-picture">
        <img src="https://cioday.com/wp-content/uploads/2018/11/avatar-placeholder.png" alt="" className='profile-picture'/>
        <h4>John Smith</h4>
      </div>
      {post.content}
    </div>
  )
}

export default PostCard