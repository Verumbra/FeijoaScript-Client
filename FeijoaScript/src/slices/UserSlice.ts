import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    token: string | null | undefined;
}

interface SettingConfig {
    theme: string,
    uiSize: string,
}

 export interface User {
    authed: AuthState,
    id: string | null,
    name: string | null,
    profile: string | null,
    isFollowing: string[] | undefined,
    bookmarksId: string[],
    LibraryId: string[],
    settings: SettingConfig | null,
    collectionList: string[];
}

const initialState: User = {
    authed: {isAuthenticated: false, token: null},
    id: null,
    name: null,
    profile: null,
    isFollowing: [],
    bookmarksId: [],
    LibraryId: [],
    settings: null,
    collectionList: []
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>)=>{
            //still need to implament proper user auth
            state.authed.isAuthenticated = true;
            state.authed.token = action.payload;
        },
        logout: (state) => {
            state.authed.isAuthenticated = false;
            state.authed.token = null;
        },
        load: (state, action: PayloadAction<User>) => {
            //used to load a user data tobe used as the main current user
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.profile = action.payload.profile;
            state.isFollowing = action.payload.isFollowing;
            state.bookmarksId = action.payload.bookmarksId;
            state.LibraryId = action.payload.LibraryId;
            state.settings = action.payload.settings;
        },
        pushRecipeId: (state, action: PayloadAction<string>) => {

            state.LibraryId = [...state.LibraryId, action.payload];
        },
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updateProfile: (state, action: PayloadAction<string>) => {
            state.profile = action.payload;
        },
        pushBookmarkId: (state, action: PayloadAction<string>) => {
            state.bookmarksId = [...state.bookmarksId, ...action.payload];
        },
        pushCollection: (state, action: PayloadAction<string>) => {
            state.collectionList = [...state.collectionList, ...action.payload];
        },
    }
});

export const {
    login,
    logout,
    load,
    pushRecipeId,
    updateName,
    updateProfile,
    pushBookmarkId,
    pushCollection} = userSlice.actions;

export default userSlice.reducer;

