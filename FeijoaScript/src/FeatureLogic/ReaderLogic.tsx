import React, {ReactNode} from "react";
import {compasiteIngredients, ingredient, instructionSection, instruction} from "../slices/RecipeSlice.ts";









function RIngredientsProcessor(props:ingredient[]): ReactNode[] {
    let sizeofList = props!=undefined?props.length:0;
    let Builder: ReactNode[] =[];

    if (!sizeofList) {
        return [<>ingrendients empty</>]
    }

    for (let i =0; i < sizeofList; i++) {
        Builder.push(<>
                <li className="r-"><span>{props[i].amount}</span>
            <span>{props[i].name}</span></li>
        </>)
    }
    return Builder;
}

export function RIngredientListProcessor(props:compasiteIngredients[]):ReactNode {
    console.log("heres the ingedientList in the loop funt:"+props);
    let sizeofList = props!=undefined?props.length:0;
    let componentBuilder:ReactNode[] = [];
    switch(true) {
        case sizeofList==0 || sizeofList==null || sizeofList==undefined:
            return <>
                No ingredients found.
        </>
        case sizeofList==1:
            componentBuilder.push(<>
                <h4>Ingredient List</h4>
        {//excute an function that formats a single block of ingredients

        }
            </>)
            break
        case sizeofList >1:
            let subelementBuilder:ReactNode[] = [];
            for (let i =0; i < sizeofList; i++) {
                subelementBuilder = RIngredientsProcessor(props[i].ingredients)
                componentBuilder.push(<ul className="r-img-sub-section" key={i}>{subelementBuilder}</ul>)
            }

            break
    }
    return componentBuilder
}

function RInstructionsProcessor(props:instruction[]):ReactNode[] {
    let sizeofList = props!=undefined?props.length:0;
    let Builder: ReactNode[] = [];

    if (!sizeofList) {
        return [<>No ingredients found.</>]
    }

    for (let i =0; i < sizeofList; i++) {
        Builder.push(<li className="r-instruct-list-item" key={i}>{props[i].stepBody}</li>)
    }
    //todo
    return Builder;
}

export function RInstructionListProcessor(props:instructionSection[]):ReactNode {
    let sizeofList = props!=undefined?props.length:0;
    let componentBuilder:ReactNode[] = [];
    switch(true) {
        case sizeofList==0 || sizeofList==null || sizeofList==undefined:
            return <>No instructions found.</>
        case sizeofList==1:
            break
        case sizeofList >1:
            let subelementBuilder:ReactNode[] = [];
            for (let i =0; i < sizeofList; i++) {
                subelementBuilder = RInstructionsProcessor(props[i].instructions);
                componentBuilder.push(<ol className="r-instruct-section-item" key={i} title={props[i].name}>{subelementBuilder}</ol>)
            }
            break
    }
    return componentBuilder;

}
