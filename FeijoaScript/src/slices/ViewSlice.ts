import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ViewStatus {
    page: string;
}

const initialState: ViewStatus = {
    page: 'HOME',
}
//SHOULD ONLY HAVE 7 POSSIBLE VALUES: HOME, READER, JOURNAL, DISCOVERY, LIBRARY, GROCERY, SUBSTITUTION
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