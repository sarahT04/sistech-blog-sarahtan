import React from 'react'
import ProfileImg from './ProfileImg'
import ProfileName from './ProfileName'

import anonymousPic from '../media/anonymous.png'
import NewBlogForm from './NewBlogForm'

function BlogsItem({ title, content, id, like, onLike, onEdit, setIsOnEdit, isOnEdit }) {

    return (
        <div className="blog-item" id={id}>
            <div className='controls-wrapper'>
                <ProfileImg img={anonymousPic} alt={"Anonymous user"} />
                <ProfileName name={"Anonymous"} />
                <button className="edit" onClick={() => { isOnEdit ? setIsOnEdit(null) : setIsOnEdit(id) }}><i style={{ fontSize: "15px" }} className="fa fa-solid fa-pencil"></i></button>
            </div>
            {isOnEdit ?
                <ContentEdit title={title} content={content} id={id} onEdit={onEdit} />
                :
                <ContentItems title={title} content={content} id={id} like={like} onLike={onLike} />
            }
        </div>
    )
}

function ContentEdit({ title, content, id, onEdit }) {
    return (
        <NewBlogForm onEditBlog={{ input: title, textarea: content, id, edit: onEdit }} />
    )
}


function ContentItems({ title, content, like, onLike, id }) {
    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
            <button className='like' onClick={() => { onLike(id); }}><i className="fa fa-solid fa-heart" style={{ color: 'red', fontSize: "15px" }}></i><span title="Like this post!" style={{ marginLeft: "5px" }}>{like}</span></button>
        </>
    )
}

export default BlogsItem