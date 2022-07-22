import React, { useState } from 'react'

function NewBlogForm({ onAddBlog, onEditBlog }) {
    const [title, setInputValue] = useState(onEditBlog === undefined ? '' : onEditBlog.input)
    const [content, setTextareaValue] = useState(onEditBlog === undefined ? '' : onEditBlog.textarea);


    const formSubmit = () => {
        onEditBlog ? onEditBlog.edit(title, content, onEditBlog.id) : onAddBlog(title, content);
    }

    return (
        <form className="new-blog" onSubmit={(event) => { formSubmit() }}>
            <input className="new-blog-title" placeholder='Title' type="text" minLength="3" maxLength="50" value={title} onChange={(event) => { setInputValue(event.target.value) }} /><br />
            <textarea className="new-blog-content" placeholder='Content' type="text" minLength="5" value={content} onChange={(event) => { setTextareaValue(event.target.value) }}></textarea><br />
            <button type='submit'>Submit</button>
        </form>
    )

    //  
    // 
}

export default NewBlogForm