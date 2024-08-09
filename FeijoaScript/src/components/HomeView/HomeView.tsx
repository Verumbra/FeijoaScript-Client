import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/store.ts";

import RecipePreviewer from "../RecipePreviewer.tsx";
import HPreviewContainer from "./HPreviewContainer.tsx";



interface childProps {
    children?: ReactNode;
}




const HomeView: React.FC<childProps> = ({children}) => {
    const [data, setData] = useState<string>('');

    const handleCallback = (childData:string) => {
        setData(childData);
    };

    return <div className="h-home-view">
        <HPreviewContainer title="what's new">
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
            <RecipePreviewer></RecipePreviewer>
        </HPreviewContainer>

        <HPreviewContainer title="favorites">

        </HPreviewContainer>
        {children}
    </div>
}

export default HomeView;