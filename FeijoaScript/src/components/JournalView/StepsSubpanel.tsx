import React, {ReactNode} from "react";

import "../css/StepsSubpanel.css";

interface Props {
    children: ReactNode;
}

const StepsSuppanel: React.FC<Props> = ({children}) => {
    return <div className="steps-subpanel">
        {children}
    </div>;
}

export default StepsSuppanel;