import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";

import "../css/DiscoveryView.css";

interface ChildProps {
    children?: ReactNode;
}


//todo need to hook all the logic up once axois is implemented
const DiscoveryView: React.FC<ChildProps> = ({children}) => {
    return <div>

        Discovery {children}</div>;
}


export default DiscoveryView;