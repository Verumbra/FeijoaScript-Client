import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface RecipePreview {
    id: string;
    ownedBy: string;
    name: string;
    image?: any;
    description?: string;
}

interface PreviewList {
    runningList: RecipePreview[];
}

const initialState:PreviewList = {
    runningList: [],
}

const recipePreviewListSlice = createSlice({
    name: 'previewList',
    initialState,
    reducers: {
        pushList: (state, action: PayloadAction<RecipePreview>) => {
            state.runningList.push(action.payload);
        },
        pullInitialList: (state, action: PayloadAction<RecipePreview[]>) => {
            state.runningList = action.payload;
        }
    }
})