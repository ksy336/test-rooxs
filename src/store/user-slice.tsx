import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/types";

const initialState: UserState = {
    loading: false,
    error: null,
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loadUsers(state, action) {
            state.loading = action.payload;
        },
        getErrorStatus(state, action) {
            state.error = action.payload;
        },
        getUsers(state, action) {
            state.users = action.payload;
        }
    }
})
export const {loadUsers, getErrorStatus, getUsers} = userSlice.actions;

export default userSlice;