import React, {ReactNode} from "react";

import "../css/DesrciptionPanel.css";

interface Props {
    children: ReactNode;
}

const DesrciptionPanel: React.FC<Props> = ({children}) => {
    return <div className="desrciptionpanel">
        {children}
    </div>;
}

export default DesrciptionPanel;