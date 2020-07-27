import { combineReducers } from 'redux'

import {postsReducer} from './postsReducer'
import {singlereducers} from './singlereducers'
const rootStore=combineReducers({
        posts:postsReducer,
        post:singlereducers
})

export default rootStore;
