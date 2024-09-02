import React, {ReactNode} from 'react';

interface ChildProps {
    children?: ReactNode;
}

const LWrapper:React.FC<ChildProps> = ({children}) => {
    return <div className="l-wrapper">
        {children}
    </div>;
}