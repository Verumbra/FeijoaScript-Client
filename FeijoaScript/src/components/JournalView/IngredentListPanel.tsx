import React, {ReactNode} from "react";

import "../css/IngredentListPanel.css";

interface Props {
    children: ReactNode;
}

const IngrendentListPanel: React.FC<Props> = ({children}) => {
    return <div className="ingrendentListpanel">
        {children}
    </div>;
}

export default IngrendentListPanel;