import React from 'react'
import {Link} from 'react-router-dom'
const Post = ({post}) => {
    return (
        <div>
           
            <p>{post.id}</p>
    <p>{post.title}</p>
    <Link to={`/${post.id}/newposts`}>post {post.id}</Link>
        </div>
    )
}

export default Post
