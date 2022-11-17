import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUsers", () => {
  return fetch("/me")
    .then((resp) => resp.json())
    .then((user) => user);
});

export const addUser = createAsyncThunk("users/addUsers", async (action) => {
  const signUp = await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(action),
  })
    .then((resp) => resp.json())
    .then((user) => user);
  return signUp;
});
export const logInUser = createAsyncThunk("users/logInUser", async (action) => {
  const loginFetch = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action),
  })
    .then((resp) => resp.json())
    .then((user) => user);
  return loginFetch;
});

export const deleteUser = createAsyncThunk("users/deleteUser", () => {
  fetch("/logout", { method: "DELETE" });
});

const initialState = {
  user: null,
  errors: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdated(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [addUser.pending](state) {
      state.status = "loading";
    },
    [addUser.fulfilled](state, action) {
      if (!!action.payload.errors === true) {
        state.errors = action.payload.errors;
        state.status = "idle";
      } else {
        state.user = [];
        state.errors = null;
        state.user = action.payload;
        state.status = "idle";
      }
    },
    [addUser.rejected](state, action) {
      state.errors = action.payload;
      state.status = "idle";
    },
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      if (!!action.payload.errors === true || !!action.payload.error === true) {
        state.errors = null;
        state.user = null;
        state.status = "idle";
      } else {
        state.errors = null;
        state.user = [];
        state.user = action.payload;
        state.status = "idle";
      }
    },
    [fetchUser.rejected](state) {
      state.status = "idle";
    },
    [logInUser.pending](state) {
      state.status = "loading";
    },
    [logInUser.fulfilled](state, action) {
      if (!!action.payload.errors === true || !!action.payload.error === true) {
        state.errors = action.payload.errors;
        state.status = "idle";
      } else {
        state.user = [];
        state.errors = null;
        state.user = action.payload;
        state.status = "idle";
      }
    },
    [logInUser.rejected](state) {
      state.status = "idle";
    },
    [deleteUser.pending](state) {
      state.status = "loading";
    },
    [deleteUser.fulfilled](state) {
      state.user = null;
      state.status = "idle";
    },
  },
});

export const { userUpdated } = userSlice.actions;
export default userSlice.reducer;
