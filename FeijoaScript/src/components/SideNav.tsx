import React, {ReactNode} from "react";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setPage} from "../slices/ViewSlice.ts";
import {RootState} from "../store/store.ts";

import HomeIcon from "./Icons/HomeIcon.tsx"
import ReaderIcon from "./Icons/ReaderIcon.tsx";

import "./css/SideNav.css";


interface ChildProps {
    children?: ReactNode;
}

const SideNav: React.FC<ChildProps> = ({children}) => {
    const dispatch = useDispatch();



    const setHome = useCallback(()=> dispatch(setPage('HOME')), []);
    const setReader = useCallback(()=> dispatch(setPage('READER')), []);
    const setJournal = useCallback(()=> dispatch(setPage('JOURNAL')), []);
    const setDiscovery = useCallback(()=> dispatch(setPage('DISCOVERY')), []);
    const setLibrary = useCallback(()=> dispatch(setPage('LIBRARY')), []);
    const setGrocery = useCallback(()=> dispatch(setPage('GROCERY')), []);
    const setsubstitution = useCallback(()=> dispatch(setPage('SUBSTITUTION')), []);

    const currentView = useSelector((state: RootState) => state.view.page);

    return <div className="sidenav">
        <a className="home-page">
            <button
                className={'home-page-button ' + `${currentView === 'HOME' ? 'active' : ''}`}
                onClick={() => setHome()}>
                <HomeIcon color='#ffffff' size={20} />
            </button>
        </a>
        <a className="library-page">
            <button
                className={'library-page-button ' + `${currentView === 'LIBRARY' ? 'active' : ''}`}
                onClick={() => setLibrary()}>
                L
            </button>
        </a>
        <a className="journal-page">
            <button
                className={'journal-page-button ' + `${currentView === 'JOURNAL' ? 'active' : ''}`}
                onClick={() => setJournal()}>
                J
            </button>
        </a>
        <a className="discovery-page">
            <button
                className={'discovery-page-button ' + `${currentView === 'DISCOVERY' ? 'active' : ''}`}
                onClick={() => setDiscovery()}>
                D
            </button>
        </a>
        <a className="reader-page">
            <button
                className={'reader-page-button ' + `${currentView === 'READER' ? 'active' : ''}`}
                onClick={() => setReader()}>
                <ReaderIcon  color='#ffffff' size={20} />
            </button>
        </a>
        <a className="grocery-list-page">
            <button
                className={'grocery-list-page-button ' + `${currentView === 'GROCERY' ? 'active' : ''}`}
                onClick={() => setGrocery()}>
                G
            </button>
        </a>
        <a className="substitution-page">
            <button
                className={'substitution-page-button ' + `${currentView === 'SUBSTITUTION' ? 'active' : ''}`}
                onClick={() => setsubstitution()}>
                S
            </button>
        </a>
        {children}
    </div>
}

export default SideNav;