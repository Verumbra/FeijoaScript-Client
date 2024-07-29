import React, {ReactNode} from "react";

import "./StepsSubpanel";

import "../css/IngredentListPanel.css";

interface Props {
    children: ReactNode;
}

const InstructionPanel: React.FC<Props> = ({children}) => {
    return <div className="instructionpanel">
        {children}
    </div>;
}

export default InstructionPanel;