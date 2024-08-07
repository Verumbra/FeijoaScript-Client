import React, {ReactNode} from "react";

import "../css/ReaderView.css";


interface Props {
    children?: ReactNode;
}

const RImageHeaderPanel: React.FC<Props> = ({children}) => {
    return <div className="r-image-header-panel">
        {children}
    </div>
}

export default RImageHeaderPanel;