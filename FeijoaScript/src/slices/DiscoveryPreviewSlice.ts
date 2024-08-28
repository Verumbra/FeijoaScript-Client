import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import RecipePreview from "../Models/PreviewModel.ts";
import {SearchCriteria} from "../Models/SearchModel.ts";

interface SearchList {
    name: string;
    searchInfo: SearchCriteria;
    previewList: RecipePreview[];
}


const initialState:SearchList[] = {

}


const DiscoveryPreviewSlice = createSlice({
    name: "discoveryPreviewList",
    initialState,
    reducers: {
        pushDiscoveryItem: (state, action:PayloadAction<{ListIndex:number, value: RecipePreview}>) => {
            state[action.payload.ListIndex].previewList.push(action.payload.value);
        },
        pushNewDiscoveryList: (state, action:PayloadAction<SearchList>) => {
            state.push(action.payload);
        }
    }
})



export const {pushDiscoveryItem, pushNewDiscoveryList} = DiscoveryPreviewSlice.actions;
export default DiscoveryPreviewSlice.reducer;