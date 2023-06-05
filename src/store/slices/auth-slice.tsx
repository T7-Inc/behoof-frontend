import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
        // action.payload - new user
        login(state, action) {
            state.user = action.payload;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;
