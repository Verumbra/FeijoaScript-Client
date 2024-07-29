import React, {ReactNode} from "react";

interface Props {
    children?: ReactNode;
}


const RDesriptionPanel: React.FC<Props> = ({ children }) => {
    return <div>
        {children}
    </div>
}

export default RDesriptionPanel;