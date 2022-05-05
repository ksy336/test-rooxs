import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types/types";

const initialState: UserState = {
    loading: false,
    error: null,
    users: [],
    isSorted: false,
    sortType: "unsorted",
    filteredList: [],
    filteredUsersByCompany: []
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
        sortUsers(state, action) {
            state.isSorted = action.payload;
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
    }
})
export const {loadUsers, getErrorStatus, getUsers, sortUsers, getSorting, filterList, filterUsersByCompany} = userSlice.actions;

export default userSlice;