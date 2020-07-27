export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () => ({ type: GET_POSTS })
export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE })


export function fetchPosts() {
    return async dispatch =>{
        dispatch(getPosts())
        try{
            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data= await res.json()
            dispatch(getPostsSuccess(data))
        }
        catch(error){
            dispatch(getPostsFailure())
        }
    }
}


export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
  }

  export function postsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return { ...state, loading: true }
      case GET_POSTS_SUCCESS:
        return { posts: action.payload, loading: false, hasErrors: false }
      case GET_POSTS_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }
  