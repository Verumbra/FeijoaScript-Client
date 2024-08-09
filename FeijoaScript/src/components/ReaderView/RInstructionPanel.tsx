import React, {ReactNode} from "react";

import '../css/ReaderView.css';

interface Props {
    children?: ReactNode;
    name?: string
}

//this comnpont display the list of steps for the recipe
const RInstructionPanel: React.FC<Props> = ({children,name}) => {
    return <div className='r-instruction-panel'>
        <ol title={name}>
            {children}
        </ol>
    </div>
}

export default RInstructionPanel;