import React, {ReactNode} from "react";


interface Props {
    children?: ReactNode;
}


const RIngredentListPanel: React.FC<Props> = ({ children }) => {
    return <div>
        {children}
    </div>
}

export default RIngredentListPanel;