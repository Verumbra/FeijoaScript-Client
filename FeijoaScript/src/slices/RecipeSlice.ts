import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface instructionSection {
    name: string,
    instructions: instruction[],
}

interface instruction {
    name?: string,
    stepBody: string,
}

interface ingredient {
    name: string,
    ingredientID: string,
    amount: string,
}

//use the name MAIN if the list is ungrouped.
interface compasiteIngredients {
    name: string,
    ingredients: ingredient[],
}


export interface Recipe {
    id: string,
    ownedBy: string,
    name: string,
    //image: img,
    description: string,
    descriptionTags: string[],
    instructions: instructionSection[],
    ingredientList: compasiteIngredients[],
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

