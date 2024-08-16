import React, {ReactNode, useState} from "react";
import SizeDropButton from "../SizeDropButton.tsx";

import "../css/HomeView.css";

interface childProps {
    children?: ReactNode;
    title?: string;
}



const HPreviewContainer:React.FC<childProps> = ({children,title}) => {
    const [size,setSize] = useState<string>('collapsed'); //open, small, collapsed, expand

    const handleSizeCallback = (childData:string) => {

    }

    return <div className="h-preview-container">
        <div className="h-wrapper">
            <div className="h-preview-container-title">{title}</div>
            <SizeDropButton size={handleSizeCallback}/>
        </div>
        <div className="hr-preview-wrapper">
            {children}
        </div>
    </div>;
}

export default HPreviewContainer;