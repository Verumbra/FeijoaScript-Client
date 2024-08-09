import React, {ReactNode, useState} from "react";
import SizeDropButton from "../SizeDropButton.tsx";


interface childProps {
    children?: ReactNode;
    title?: string;
}



const HPreviewContainer:React.FC<childProps> = ({children,title}) => {
    const [size,setSize] = useState<string>('collapsed'); //open, small, collapsed, expand

    const handleSizeCallback = (childData:string) => {

    }

    return <div className="h-preview-container">
        <SizeDropButton size={handleSizeCallback}/>
        {children}
    </div>;
}

export default HPreviewContainer;