


export interface instructionSection {
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