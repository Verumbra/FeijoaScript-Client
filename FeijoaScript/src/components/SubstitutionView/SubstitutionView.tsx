import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";


interface ChildProps {
    children?: ReactNode;
}

const SubstitutionView: React.FC<ChildProps> = ({children}) => {
    return <div>Substitution {children}</div>;
}


export default SubstitutionView;