import React, {ReactNode} from "react";
import {compasiteIngredients, ingredient} from "../slices/RecipeSlice.ts";









function RIngredientsProcessor(props:ingredient[]): ReactNode[] {
    let sizeofList = props!=undefined?props.length:0;
    let Builder: ReactNode[] =[];

    if (!sizeofList) {
        return [<>ingrendients empty</>]
    }

    for (let i =0; i < sizeofList; i++) {
        Builder.push(<>
                <li><span>{props[i].amount}</span>
            <span>{props[i].name}</span></li>
        </>)
    }
    return Builder;
}

export function RIngredientListProcessor(props:compasiteIngredients[]):ReactNode {
    console.log(props);
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
                componentBuilder.push(<ul key={i}>{subelementBuilder}</ul>)
            }

            break
    }
    return componentBuilder
}

