import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/store.ts";

import RecipePreviewer from "../RecipePreviewer.tsx";
import HPreviewContainer from "./HPreviewContainer.tsx";
import ReaderIcon from "../Icons/ReaderIcon.tsx";
import {HPreviewContainerProcessor} from "../../FeatureLogic/HomeLogic.tsx";

import "../css/HomeView.css";

interface childProps {
    children?: ReactNode;
}




const HomeView: React.FC<childProps> = ({children}) => {
    const [data, setData] = useState<string>('');
    const indexSize:number = useSelector((state:RootState)=>state.homePreviewList.length)
    const handleCallback = (childData:string) => {
        setData(childData);
    };

    return <div className="h-home-view">
        {/*<HPreviewContainer title="what's new">
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
        </HPreviewContainer>

            <HPreviewContainer title="favorites">

            </HPreviewContainer>*/}
        {HPreviewContainerProcessor(indexSize)}
        {children}
    </div>
}

export default HomeView;