import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";

//import for sub components
import RImageHeaderPanel from "../../components/ReaderView/RImageHeaderPanel.tsx";
import RInstructionPanel from "../../components/ReaderView/RInstructionPanel.tsx";
import RNamePanel from "../../components/ReaderView/RNamePanel.tsx";
import RStepsSubpanel from "../../components/ReaderView/RStepsSubpanel.tsx";
import RDesrciptionPanel from "../../components/ReaderView/RDesrciptionPanel.tsx";
import RIngredentListPanel from "../../components/ReaderView/RIngredentListPanel.tsx";

import {compasiteIngredients, ingredient} from "../../slices/RecipeSlice.ts";

//redux imports
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store.ts";
//import {Recipe} from "../../slices/RecipeSlice.ts";

//import {updateActive} from "../../slices/RecipeSlice.ts";

//Logic Import
import {RIngredientListProcessor} from "../../FeatureLogic/ReaderLogic.tsx";

import '../../components/css/ReaderView.css';
import RecipeTestData from "../mock data/RecipeTestData.ts";
import image from "../mock data/Lasagna-Recipe.jpg"

interface Props {
    children?: ReactNode;

}
//RInstruction needs to generate a list of steps subpanels based of global store values

//possiple feature: be able to





const ReaderViewMock: React.FC<Props> = ({children}) => {

    const currentlyViewing = useSelector((state:RootState) => state.recipeList);

    return <div className='reader-view-container'>
        <RImageHeaderPanel><img className="top-image-container" src={image} alt="test"/> </RImageHeaderPanel>
        <RNamePanel>{RecipeTestData.name}</RNamePanel>

        <RDesrciptionPanel>
            <>{RecipeTestData.description}</>{}
        </RDesrciptionPanel>

        <RIngredentListPanel>
            {RIngredientListProcessor(RecipeTestData.ingredientList)}
        </RIngredentListPanel>
        <RInstructionPanel>

            <RStepsSubpanel>Combine the cheese filling ingredients in a medium bowl and set aside. Measure out remaining ingredients.</RStepsSubpanel>
            <RStepsSubpanel>sdjvjsovnwefvjsevjnwerovn</RStepsSubpanel>

        </RInstructionPanel>
        {children}
    </div>
}

export default ReaderViewMock;
