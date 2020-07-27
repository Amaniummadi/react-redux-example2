export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'


export const getpost=()=>({
    type:GET_POST
})
export const getpostsuccess=(sindata)=>({
    type:GET_POST_SUCCESS,
    payload:sindata
})
export const getpostfailure=()=>({
    type:GET_POST_FAILURE
})

export function fetchpost(id){
    return async dispatch => {
        dispatch(getpostfailure())
        try{
            const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data= await res.json()
            dispatch(getpostsuccess(data))
        }
        catch(error){
            dispatch(getpostfailure())
        }
    }

    
}

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
  }

  export function singlereducers(state = initialState, action) {
    switch (action.type) {
      case GET_POST:
        return { ...state, loading: true }
      case GET_POST_SUCCESS:
        return { posts: action.payload, loading: false, hasErrors: false }
      case GET_POST_FAILURE:
        return { ...state, loading: false, hasErrors: true }
      default:
        return state
    }
  }
  