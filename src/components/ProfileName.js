import React from 'react'

function ProfileName({ name }) {
    return (
        <h2 className='name'>{name || "Sarah Tan"}</h2>
    )
}

export default ProfileName