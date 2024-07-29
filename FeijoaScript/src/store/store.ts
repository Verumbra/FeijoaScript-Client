import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../slices/UserSlice.ts";
import recipeListSlice from "../slices/RecipeSlice.ts"
import viewSlice from "../slices/ViewSlice.ts"


const store = configureStore({
    reducer: {
        user: userSlice,
        recipeList: recipeListSlice,
        view: viewSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;