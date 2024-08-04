import React, {ReactNode} from "react";

import '../css/ReaderView.css';

interface Props {
    children?: ReactNode;
}


const RIngredentListPanel: React.FC<Props> = ({ children }) => {
    return <div className='r-ingredent-list-panel'>
        {children}
    </div>
}

export default RIngredentListPanel;