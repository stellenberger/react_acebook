import React from 'react'
import { WritePost } from '../../index'
import './StatusCard.scss'

const StatusCard = ({retrievePosts}) => {
  return (
    <div className='status-card-container'>
      <div className="status-box-and-profile-picture">
        <img src="https://cioday.com/wp-content/uploads/2018/11/avatar-placeholder.png" alt="" className='profile-picture'/>
        <WritePost retrievePosts={retrievePosts} />
      </div>
    </div>
  )
}

export default StatusCard