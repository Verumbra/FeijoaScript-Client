import React, {ReactNode} from "react";

interface Props {
    children?: ReactNode;
}

//this comnpont display the list of steps for the recipe
const RInstructionPanel: React.FC<Props> = ({children}) => {
    return <div>
        <ol>
            {children}
        </ol>
    </div>
}

export default RInstructionPanel;