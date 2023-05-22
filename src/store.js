import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import taskReducer from './reducers/taskReducer'


const store = legacy_createStore(
    taskReducer, 
    composeWithDevTools(applyMiddleware(thunk))   
)

export default store

// createStore(reducer,  [enhancer])
// reducer : taskReducer , type : function ,Reducing function that gives the next state taking input as current state & actions
// enhancer : applyMiddleware , type : function
// The composeWithDevTools function is used to enhance the Redux store with the Redux DevTools extension. It allows you to inspect and debug the state and actions of your Redux application using the DevTools browser extension.
