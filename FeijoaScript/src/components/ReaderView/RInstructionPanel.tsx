import React, {ReactNode} from "react";

import '../css/ReaderView.css';

interface Props {
    children?: ReactNode;
}

//this comnpont display the list of steps for the recipe
const RInstructionPanel: React.FC<Props> = ({children}) => {
    return <div className='r-instruction-panel'>
        <ol>
            {children}
        </ol>
    </div>
}

export default RInstructionPanel;