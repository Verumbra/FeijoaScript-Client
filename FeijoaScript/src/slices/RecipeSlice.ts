import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface instruction {

}

interface ingredent {
    name: string,
    ingredientID: string,
    amount: string,
}


interface Recipe {
    id: string,
    ownedBy: string,
    name: string,
    //image: img,
    description: string,
    descriptionTags: string[],
    instructions: instruction[],
    ingredientList: ingredent[],
    isVisible: boolean,
    isType: string[],
    favoritedBy: string[],
    recipeArchetype: string,
}

interface RecipeList {
    activeRecipe: Recipe;

}

const initialState: RecipeList = {
    activeRecipe: {
        id: '',
        ownedBy: '',
        name: '',
        //image: img,
        description: '',
        descriptionTags: [],
        instructions: [],
        ingredientList: [],
        isVisible: false,
        isType: [],
        favoritedBy: [],
        recipeArchetype: '',
    }
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