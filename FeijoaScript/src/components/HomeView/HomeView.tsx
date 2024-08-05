import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store/store.ts";



interface childProps {
    children?: ReactNode;
}

const HomeView: React.FC<childProps> = ({children}) => {
    return <div>Home: Hello World{children}</div>
}

export default HomeView;