import { createSlice } from '@reduxjs/toolkit';

interface ITrackProduct {
    id: string;
    title: string;
    img: string;
    market: number;
}

interface IInitialState {
    products: Array<ITrackProduct>;
}

const initialState: IInitialState = {
    products: [],
};

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        addTrack(state, action) {
            state.products = [...state.products, action.payload];
        },
        removeTrack(state, action) {
            state.products = state.products.filter(
                (i) => i?.id !== action.payload,
            );
        },
    },
});

export const trackActions = trackSlice.actions;

export default trackSlice;
