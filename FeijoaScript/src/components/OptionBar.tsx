import React, {ReactNode} from "react";


interface Props {
    children?: ReactNode;
}


const OptionBar: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
}

export default OptionBar;