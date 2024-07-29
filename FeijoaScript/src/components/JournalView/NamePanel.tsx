import React, {ReactNode} from "react";

import "../css/NamePanel.css";

interface Props {
    children?: ReactNode;
}

const NamePanel: React.FC<Props> = ({children}) => {
    return <div className="name-panel">
        {children}
    </div>;
}

export default NamePanel;