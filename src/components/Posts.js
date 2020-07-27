import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchPosts} from '../reducers/postsReducer'
import Post from './Post'

const Posts = ({dispatch,loading,posts,error}) => {
    useEffect(() => {
       dispatch(fetchPosts())
    }, [dispatch])
    console.log("posts loading",loading);
    console.log("posts poats",posts);
    console.log("posts error",error);

    return (
        <div>
            <h1>postspage</h1>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       loading:state.posts.loading, 
       error:state.posts.hasErrors,
       posts:state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts)
