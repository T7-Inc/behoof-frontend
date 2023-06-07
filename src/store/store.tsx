import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import favSlice from './slices/favorite-slice';
import trackSlice from './slices/track-slice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        fav: favSlice.reducer,
        track: trackSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
