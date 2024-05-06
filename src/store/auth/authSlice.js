import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
     login: (state, {payload}) => {

     },
     logOut: (state, {payload}) => {

     },
     checkingCredentials: (state) => {
     }
    }
});

// Action creators are generated for each case reducer function
export const { login, logOut, checkingCredentials } = authSlice.actions;