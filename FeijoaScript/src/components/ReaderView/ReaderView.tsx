import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";

//import for sub components
import RImageHeaderPanel from "./RImageHeaderPanel";
import RInstructionPanel from "./RInstructionPanel.tsx";
import RNamePanel from "./RNamePanel.tsx";
import RStepsSubpanel from "./RStepsSubpanel.tsx";
import RDesrciptionPanel from "./RDesrciptionPanel.tsx";
import RIngredentListPanel from "./RIngredentListPanel.tsx";

import {compasiteIngredients, ingredient} from "../../slices/RecipeSlice.ts";

//redux imports
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store/store.ts";
import {Recipe} from "../../slices/RecipeSlice.ts";

import {updateActive} from "../../slices/RecipeSlice.ts";

//logic import
import {RIngredientListProcessor, RInstructionListProcessor} from "../../FeatureLogic/ReaderLogic.tsx";

import '../css/ReaderView.css';
import RecipeTestData from "../../stories/mock data/RecipeTestData.ts";

interface Props {
    children?: ReactNode;

}
//RInstruction needs to generate a list of steps subpanels based of global store values

//possiple feature: be able to





const ReaderView: React.FC<Props> = ({children}) => {
    const testing:ReactNode[] = [<div>first div</div>,<div>second div</div>,<div>third div</div>]

    const currentlyViewing = useSelector((state:RootState) => state.recipeList);

    return <div className='reader-view-container'>
        <RImageHeaderPanel></RImageHeaderPanel>
        <RNamePanel>
            {
                currentlyViewing.activeRecipe.name!==undefined?currentlyViewing.activeRecipe.name:"None"
            }
        </RNamePanel>

        <RDesrciptionPanel>
            <h4>{currentlyViewing.activeRecipe.description}</h4>{}
        </RDesrciptionPanel>

        <RIngredentListPanel>
            {RIngredientListProcessor(currentlyViewing.activeRecipe.ingredientList)}{}
        </RIngredentListPanel>
        <RInstructionPanel>
            {RInstructionListProcessor(RecipeTestData.instructions)}

        </RInstructionPanel>
        {children}
    </div>
}

export default ReaderView;

