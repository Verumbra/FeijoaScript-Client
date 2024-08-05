import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";



interface ChildProps {
    children?: ReactNode;
}


const GroceryView: React.FC<ChildProps> = ({children}) => {
    return <div>Grocery {children}</div>;
}


export default GroceryView;