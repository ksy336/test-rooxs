import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import formSlice from "./form-slice";


const store = configureStore({
    reducer: {users: userSlice.reducer, form: formSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;