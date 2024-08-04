import React, {ReactNode} from "react";

import '../css/ReaderView.css';


interface Props {
    children?: ReactNode;
}

const RStepsSubpanel: React.FC<Props> = ({children}) => {
    return <body className="r-steps-subpanel">
        {children}
    </body>
}


export default RStepsSubpanel;