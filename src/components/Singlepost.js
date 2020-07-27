import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchpost} from '../reducers/singlereducers'
import {useParams} from 'react-router-dom'
const Singlepost = ({match,dispatch,post}) => {
    const {id }=useParams()
    // const { id } = match.params
    // console.log("id value",id)
    useEffect(() => {
      
       dispatch(fetchpost(id))
    }, [dispatch,match])

    console.log("post",post);
    return (
        <div>
          <p>
              jdvnbnvxc</p>
    <h2>{post.title}</h2>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
       post:state.post.posts
    }
}

export default connect(mapStateToProps)(Singlepost)
