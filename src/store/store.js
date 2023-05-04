import {combineReducers, createStore} from "redux";
import {taskReducer} from "./reducers/taskReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(taskReducer, composeWithDevTools())