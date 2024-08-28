import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {TestPreviewList1, TestPreviewList2, TestPreviewList3, TestPreviewList4} from "../stories/mock data/PreviewTestData.ts";


interface RecipePreview {
    id: string;
    ownedBy: string;
    name: string;
    image?: any;
    description?: string;
}



interface PreviewList {
    name: string;
    previewList: RecipePreview[];
}

 let devOn= true
let testState= [{name:"runningList", previewList: TestPreviewList1},
    {name:"bookmarkList", previewList: TestPreviewList4},
    {name:"ownedList", previewList: TestPreviewList2},];

const initialState:PreviewList[] = devOn? testState : [];

const recipePreviewListSlice = createSlice({
    name: 'homePreviewList',
    initialState,
    reducers: {
        pushHomeItem: (state, action: PayloadAction<{listIndex: number, value:RecipePreview}>) => {
            state[action.payload.listIndex].previewList.push(action.payload.value);
        },
        //
        pushNewHomeList: (state, action: PayloadAction<PreviewList>) => {
            state.push(action.payload);
        },
        //pushNewItem: (state, action: PayloadAction<{key:string, value: RecipePreview}>) => {}

    }
})


export const {pushHomeItem} = recipePreviewListSlice.actions;
export default recipePreviewListSlice.reducer;