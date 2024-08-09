import React, {ReactNode} from "react";

import "../css/ReaderView.css";


interface Props {
    children?: ReactNode;
    name?: string;
}

const RImageHeaderPanel: React.FC<Props> = ({children,name}) => {
    return <div className="r-image-header-panel">
        <div>{name}</div>
        {children}
    </div>
}

export default RImageHeaderPanel;