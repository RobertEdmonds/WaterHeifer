import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "idle"
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        userAdded(state, action){
            state.users.push(action.payload)
        },
        userUpdated(state, action){
            const user = state.users.find(person => person.id === action.payload.id);
            // user. = action.payload
            console.log(user)
        }
    }
})
export const { userAdded, userUpdated } = userSlice.actions;
export default userSlice.reducer