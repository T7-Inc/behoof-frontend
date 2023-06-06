import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    email: string;
    firstName: string;
    lastName: string;
}

interface IInitialState {
    user: IUser | null;
}

const initialState: IInitialState = {
    user: {
        email: 'test@test.com',
        firstName: 'Ivan',
        lastName: 'Ishchenko',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
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
