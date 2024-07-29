import React, {ReactNode} from "react";

import  "../css/ImageHeaderPenal.css";

interface Props {
    children: ReactNode;
}

const ImageHeaderPanel: React.FC<Props> = ({children}) => {
    return <div className="imageheaderpanel">
        {children}
    </div>
}

export default ImageHeaderPanel;