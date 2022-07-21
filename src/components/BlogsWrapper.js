import React, { useState } from 'react'
import AddNewBlog from './NewBlogForm'
import BlogsItem from './BlogsItem'

function BlogsWrapper({ blogs, onLike, onEdit, onAddBlog }) {
  const [isOnEdit, setIsOnEdit] = useState();

  return (
    <div id='blog-wrapper'>
      <h1 style={{ marginBottom: '20px' }}>Create New Post</h1>
      <AddNewBlog onAddBlog={onAddBlog} />
      <br /><br /><br /><br />
      {
        blogs.map((blog) => (
          <BlogsItem key={blog.id} id={blog.id} onLike={onLike} onEdit={onEdit} isOnEdit={blog.id === isOnEdit || false} setIsOnEdit={setIsOnEdit} {...blog} />
        ))
      }
    </div>
  )
}

export default BlogsWrapper