import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";
import {postReducer} from "./slices/postSlice";

const rootReducer =  combineReducers({
    users:userReducer,
    posts:postReducer
});


const setupStore =()=> configureStore({
    reducer:rootReducer
});

export {setupStore}