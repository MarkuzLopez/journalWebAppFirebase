import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //not-authenticated, checking
        email: null,
        displayName: null,
        photoURL: null,
        uid: null,
        errorMessage: null
    },
    reducers: {
     login: (state, {payload}) => {
        state.status =  'authenticated', //not-authenticated, checking
        state.email =  payload.email,
        state.displayName =  payload.displayName,
        state.photoURL =  payload.photoURL,
        state.uid = payload.uid;
        state.errorMessage =  null
     },
     logOut: (state, {payload}) => {
        state.status =  'not-authenticated', //not-authenticated, checking
        state.email =  null,
        state.displayName =  null,
        state.photoURL =  null,
        state.uid = null,
        state.errorMessage =  payload.errorMessage
     },
     checkingCredentials: (state) => {
        state.status = 'checking'
     }
    }
});

// Action creators are generated for each case reducer function
export const { login, logOut, checkingCredentials } = authSlice.actions;