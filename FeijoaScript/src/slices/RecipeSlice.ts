import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Recipe} from "../Models/RecipeModel.ts";
import TestRecipe from "../stories/mock data/RecipeTestData.ts";


interface RecipeList {
    activeRecipe: Recipe;
    runningList: Recipe[];

}

const startActiveRecipe = {
    id: '',
    ownedBy: '',
    name: '',
    //image: img,
    description: '',
    descriptionTags: [''],
    instructions: [],
    ingredientList: [{name:'', ingredients:[{name:'...', ingredientID:'', amount:'...'}]},{name:'', ingredients:[{name:'...', ingredientID:'', amount:'...'}]}],
    isVisible: false,
    isType: [''],
    favoritedBy: [''],
    recipeArchetype: '',
}

const initialState: RecipeList = {
    activeRecipe: TestRecipe
}


const recipeListSlice = createSlice({
    name: 'recipeList',
    initialState,
    reducers: {
        updateActive: (state, action: PayloadAction<Recipe>) => {
            state.activeRecipe = action.payload;
        }
    }

})

export const {updateActive} = recipeListSlice.actions;
export default recipeListSlice.reducer;

