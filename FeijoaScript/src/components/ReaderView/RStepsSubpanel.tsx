import React, {ReactNode} from "react";


interface Props {
    children?: ReactNode;
}

const RStepsSubpanel: React.FC<Props> = ({children}) => {
    return <body>
        {children}
    </body>
}


export default RStepsSubpanel;