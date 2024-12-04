import { createSlice } from '@reduxjs/toolkit';

interface IFavProduct {
    id: string;
    title: string;
    img: string;
    market: number;
}

interface IInitialState {
    products: Array<IFavProduct>;
}

const initialState: IInitialState = {
    products: [],
};

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFav(state, action) {
            state.products = [...state.products, action.payload];
        },
        removeFav(state, action) {
            state.products = state.products.filter(
                (i) => i?.id !== action.payload,
            );
        },
    },
});

export const favActions = favSlice.actions;

export default favSlice;
