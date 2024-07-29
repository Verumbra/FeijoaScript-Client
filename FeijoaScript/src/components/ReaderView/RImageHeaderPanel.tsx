import React, {ReactNode} from "react";


interface Props {
    children?: ReactNode;
}

const RImageHeaderPanel: React.FC<Props> = ({children}) => {
    return <div>
        {children}
    </div>
}

export default RImageHeaderPanel;