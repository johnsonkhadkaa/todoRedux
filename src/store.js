import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import taskReducer from './reducers/taskReducer'


const store = legacy_createStore(
    taskReducer, 
    composeWithDevTools(applyMiddleware(thunk))   
)

export default store

