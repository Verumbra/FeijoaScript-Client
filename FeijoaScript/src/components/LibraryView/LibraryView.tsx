import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";



interface ChildProps {
    children?: ReactNode;
}

const LibraryView: React.FC<ChildProps> = ({children}) => {
    return <div>Library {children}</div>;
}

export default LibraryView;