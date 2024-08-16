import React, {ReactNode} from "react";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store.ts";

import {HRecipePreviewProcessor} from "../../FeatureLogic/HomeLogic.tsx";


interface Props {
    children?: ReactNode;
    previewListIndex: number;
}


const HRPreviewWrapper:React.FC<Props> = ({children, previewListIndex}) => {
    console.log("in HRPreviewWrapper value of previewListIndex: "+ previewListIndex);

    return <div className="hr-preview-wrapper">
        {HRecipePreviewProcessor(previewListIndex)}
    </div>
}

export default HRPreviewWrapper;