import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState ={
    login: "developer21"
}

export const increment = createAction('INCREMENT')

export default createReducer(initialState,{
    [increment]: function (state){
        state.login = "developer21"
    }
})