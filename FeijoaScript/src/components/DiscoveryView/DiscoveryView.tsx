import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";


interface ChildProps {
    children?: ReactNode;
}



const DiscoveryView: React.FC<ChildProps> = ({children}) => {
    return <div>Discovery {children}</div>;
}


export default DiscoveryView;