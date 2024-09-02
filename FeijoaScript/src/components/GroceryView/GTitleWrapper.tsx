import React, {ReactNode} from "react";


interface ChildProps {
    children: ReactNode;
}



const GTitleWrapper: React.FC<ChildProps> = ({children}) => {
    return <div>{children}</div>;
}