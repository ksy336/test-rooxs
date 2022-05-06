import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/types";

const initialState: UserState = {
    loading: false,
    error: null,
    users: [],
    sortType: "unsorted",
    filteredList: [],
    filteredUsersByCompany: [],
    userProfile: []
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
        },
        getSorting(state, action) {
            state.sortType = action.payload;
        },
        filterList(state, action) {
           state.filteredList = action.payload;
        },
        filterUsersByCompany(state, action) {
            state.filteredUsersByCompany = action.payload;
        },
        getUserProfile(state, action) {
            state.userProfile = action.payload;
        }
    }
})
export const {loadUsers, getErrorStatus, getUsers, getSorting, filterList, filterUsersByCompany, getUserProfile} = userSlice.actions;

export default userSlice;