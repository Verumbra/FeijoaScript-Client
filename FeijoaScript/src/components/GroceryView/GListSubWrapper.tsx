import React, {ReactNode} from 'react';


interface ChildProps {
    children?: ReactNode;

}

const GListSubWrapper:React.FC<ChildProps> = ({children}) => {
    return <div className="g-list-subwrapper">{children}</div>;
}

export default GListSubWrapper;