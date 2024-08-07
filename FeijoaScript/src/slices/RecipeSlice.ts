import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface instructionSection {
    name: string,
    instructions: instruction[],
}

export interface instruction {
    name?: string,
    stepBody: string,
}

export interface ingredient {
    name: string,
    ingredientID?: string,
    amount: string,
}

//use the name MAIN if the list is ungrouped.
export interface compasiteIngredients {
    name?: string,
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
        descriptionTags: [''],
        instructions: [],
        ingredientList: [{name:'', ingredients:[{name:'...', ingredientID:'', amount:'...'}]},{name:'', ingredients:[{name:'...', ingredientID:'', amount:'...'}]}],
        isVisible: false,
        isType: [''],
        favoritedBy: [''],
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

