import React from 'react'
import sarahPic from '../media/Sarah pic.jpg'

function ProfileImg({ img, alt }) {
  return (
    <img src={img || sarahPic} alt={alt || "Sarah's selfie"} className='pic' />
  )
}

export default ProfileImg