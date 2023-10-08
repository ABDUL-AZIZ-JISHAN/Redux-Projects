import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : {}
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser :(state, action) =>{
            state.user = action.payload;
        },
        resetUser :(state) =>{
            state.user = {};
        }
    }
})

export default userSlice.reducer;

export const {addUser, resetUser} = userSlice.actions;