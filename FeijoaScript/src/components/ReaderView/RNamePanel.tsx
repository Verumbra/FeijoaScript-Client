import React, {ReactNode} from "react";

import "../css/ReaderView.css";

interface Props {
    children?: ReactNode;
}

const RNamePanel: React.FC<Props> = ({children}) => {
    return <div className="r-name-panel">

        {children}
    </div>
}

export default RNamePanel;