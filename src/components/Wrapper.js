import axios from 'axios';
import React, { Component } from 'react'
import { BEARER, BLOG_URL, LIKE_BLOG_URL, POST_BLOG_URL, PUT_BLOG_URL } from '../utils/constants';
import BlogsWrapper from './BlogsWrapper';
import ProfileBody from './ProfileBody';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + BEARER;

// DOWNLOAD THE BACKEND

export class Wrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        // {id, content, like, title}

        this.likeBlog = this.likeBlog.bind(this);
    }

    async componentDidMount() {
        await axios.get(BLOG_URL)
            .then((resp) => {
                this.setState({ blogs: resp.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this.setState({});
    }

    // WORKED
    createBlog(title, content) {
        axios.post(POST_BLOG_URL, {
            title: title,
            content: content,
        })
            .then((resp) => {
                console.log("SUCCESS")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // WORKED
    modifyBlog(title, content, id) {
        axios.put(PUT_BLOG_URL, {
            title: title,
            content: content,
            id: id,
        })
            .then((resp) => {
                console.log("SUCCESSFUL")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // WORKED
    likeBlog(id) {
        axios.post(LIKE_BLOG_URL, {
            id: id,
        })
            .then((resp) => {
                this.setState({
                    blogs: this.state.blogs.map(blog => {
                        if (blog.id === id) {
                            return { ...blog, like: parseInt(blog.like) + 1 }
                        } else {
                            return blog
                        }
                    }),
                })
                console.log("Liked");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let blogs = this.state.blogs || []
        return (

            <div id="wrapper">
                <BlogsWrapper blogs={blogs} onLike={this.likeBlog} onEdit={this.modifyBlog} onAddBlog={this.createBlog} />
                <ProfileBody />
            </div>
        )
    }
}

export default Wrapper