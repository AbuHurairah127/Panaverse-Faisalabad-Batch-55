import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isUserLoggedIn: false,
    user:{
        name:"Naveed",
        email: "naveed@gmail.com",
        phone: "12231231"
    }
}
const authSlice = createSlice({
name: "authSlice",
initialState:initialState,
reducers: {
    doLogin: (state, action)=>{
        console.log("state",state)
        console.log("Action: " + action);
    },
    doLogout: (state, action)=>{

    },
}
})

export const { doLogin,doLogout } = authSlice.actions;
export default authSlice.reducer