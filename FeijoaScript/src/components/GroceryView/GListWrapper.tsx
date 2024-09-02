import React, {ReactNode} from "react";



interface ChildProps {
    children?: ReactNode;
}

const GListWrapper: React.FC<ChildProps> = ({children}) => {
    return <div className="g-list-wrapper">{children}</div>;
}

export default GListWrapper;