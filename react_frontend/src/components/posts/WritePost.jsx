import React, { useState } from 'react'
import axios from 'axios'

const WritePost = () => {
  const [post, setPost] = useState({content: '', user_id: 1})
  const url = process.env.REACT_APP_URL
  
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url + '/posts', { post: post }, { withCredentials: true })
      .then(response => {
        console.log('post successfully created', response)
        setPost({ ...post, content: ''})
      })
      .catch(error => {
        console.log('error processing post request',error)
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Write a post</label>
        <input type="textbox" name="content" value={post.content} onChange={handleChange}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default WritePost