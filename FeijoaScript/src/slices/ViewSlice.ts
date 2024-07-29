import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ViewStatus {
    page: string;
}

const initialState: ViewStatus = {
    page: 'home',
}

const veiwSlice = createSlice({
    name: 'current-view',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        }
    }
})


export const { setPage } = veiwSlice.actions;

export default veiwSlice.reducer;