import {ReactNode} from "react";

import RecipePreview from "../Models/PreviewModel.ts";
import DSearchContainer from "../components/DiscoveryView/DSearchContainer.tsx";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/store.ts";
import RecipePreviewer from "../components/RecipePreviewer.tsx";


//this function handles the list of recipe preview from the search results
function DSearchListProcessor(props:number):ReactNode[] {
    let searchListSize = useSelector((state:RootState) => state.discoveryPreviewList[props].previewList.length);

    let builder:ReactNode[] = [];


    switch (true) {
        case searchListSize==0 || searchListSize== undefined:
            return builder;
        case searchListSize==1:
            builder.push(<RecipePreviewer key={0} type="Search" placeKey={0} catKey={props} indexKey={0}/>)
            break
        case searchListSize>1:
            let i = 0;
            while (i<searchListSize) {
                builder.push(<RecipePreviewer  key={i} type="Search" placeKey={i} catKey={props} indexKey={i}></RecipePreviewer>)
                i++
            }
            break
    }
    return builder;
}


//this function determines both how the DSearchContainer behaves and how many should be produced
function DSearchContainerHandler(props:any): ReactNode | ReactNode[] {
    let builder:ReactNode[] | ReactNode;


}


///here is the space for the async funtion to do the searches will go