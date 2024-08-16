import React, {ReactNode} from "react";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/store.ts";

import "./css/RecipePreviewer.css";

interface Props {
    children?: ReactNode;
    catKey: number;
    indexKey:number;
    placeKey: number;
}
//will contain a recipe projection and on fetch the whole recipe once it's clicked and loading the full recipe page


const RecipePreviewer: React.FC<Props> = ({children,catKey,indexKey, placeKey}) => {
    console.log(placeKey)
    const isFirst = placeKey == 0? " first" : "";
    //console.log(catKey);
    //console.log(indexKey);
    const preview =useSelector((state: RootState) => state.previewList[catKey].previewList[indexKey]);
    //console.log(preview);

    return <div className={"recipepreviewer"+`${isFirst}`}>
        <div className="banner-box">
            <label>{preview.name}</label>
        </div>

        {children}
    </div>;
}


export default RecipePreviewer;
