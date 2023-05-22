import taskReducer from './taskReducer'
import {combineReducers} from 'redux'


export const rootReducer = combineReducers({
    tasks : taskReducer
}) 

