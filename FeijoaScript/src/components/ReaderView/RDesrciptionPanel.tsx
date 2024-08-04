import React, {ReactNode} from "react";

import '../css/ReaderView.css';

interface Props {
    children?: ReactNode;
}


const RDesriptionPanel: React.FC<Props> = ({ children }) => {
    return <div className='r-desription-panel'>
        {children}
    </div>
}

export default RDesriptionPanel;