import {createSlice} from "@reduxjs/toolkit";
import {FormState} from "../types/types";

const initialState: FormState = {
    isFormValid: false,
    firstName: "",
    userName: "",
    email: "",
    street: "",
    city: "",
    zipCode: "" ,
    phone: "",
    website: "",
    comment: ""
}
const formSlice = createSlice({
    name: "form",
    initialState: initialState,
    reducers: {
        changeFormValid(state, action) {
            state.isFormValid = action.payload;
        },
        sendFirstName(state, action) {
            return {...state, firstName: action.payload};
        },
        sendUserName(state, action) {
            return {...state, userName: action.payload};
        },
        sendEmail(state, action) {
            return {...state, email: action.payload};
        },
        sendStreet(state, action) {
            return {...state, street: action.payload};
         },
        sendCity(state, action) {
            return {...state, city: action.payload};
        },
        sendZipCode(state, action) {
            return {...state, zipCode: action.payload};
        },
        sendPhone(state, action) {
            return {...state, phone: action.payload};
        },
        sendWebsite(state, action) {
            return {...state, website: action.payload}
        },
        sendComment(state, action) {
            return {...state, comment: action.payload};
        }
    }
});
export const {changeFormValid, sendFirstName, sendUserName, sendEmail, sendStreet, sendCity, sendZipCode, sendPhone, sendWebsite, sendComment} = formSlice.actions;
export default formSlice;