import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUsers", () => {
  return fetch("/me")
    .then((resp) => resp.json())
    .then((user) => user);
});

export const addUser = createAsyncThunk("users/fetchUsers", (action) => {
  return fetch("/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(action),
  })
    .then((resp) => resp.json())
    .then((user) => user);
});

export const deleteUser = createAsyncThunk("users/deleteUser", () => {
  fetch("/logout", { method: "DELETE" }).then((resp) => resp.json());
});

const initialState = {
  users: [],
  status: "idle",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.errors.push(action.payload);
    },
    userUpdated(state, action) {
      // const user = state.users.find(
      //   (person) => person.id === action.payload.id
      // );
      // // user. = action.payload
      // console.log(user);
    },
  },
  extraReducers: {
    [addUser.pending](state) {
      state.status = "loading";
    },
    [addUser.fulfilled](state, action) {
      state.users = [];
      state.users = action.payload;
      state.status = "idle";
    },
    [addUser.rejected](state, action) {
      state.errors = action.payload;
      state.status = "idle";
    },
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
        state.users = []
        state.users = action.payload;
        state.status = "idle";
    },
    [fetchUser.rejected](state) {
      state.status = "idle";
    },
    [deleteUser.pending](state) {
      state.status = "loading";
    },
    [deleteUser.fulfilled](state) {
      state.users = [];
      state.status = "idle";
    },
  },
});

export const { userAdded, userUpdated } = userSlice.actions;
export default userSlice.reducer;
