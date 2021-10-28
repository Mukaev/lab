import {combineReducers, configureStore }from '@reduxjs/toolkit';
import toolkitReduser from './toolkitReduser';

const rootReduser = combineReducers({
    toolkit: toolkitReduser

})

export const store = configureStore({
    reducer:rootReduser,
})