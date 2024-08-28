import React,{ReactNode} from "react";
import {useSelector, useDispatch} from "react-redux";

import

import "../css/DiscoveryView.css";

interface ChildProps {
    children?: ReactNode;
    type: string;//used to set up the component to be a silent container or be a wrapper for the list
    searchListKey: number;

}

/*This Component is the main way that the search results is displayed
* it takes the list it will display from the store(by calling a processor function) rather than directly fetching from the source
* this way the search results can be decoupled from the fetching process
* todo implement scalffuing when Atmos is implemented,
* todo make this component able to be async
* todo implement a way for multiple containers to be coexistent */
const DSearchContainer: React.FC<ChildProps> = ({children, type}) => {


    return <div className={"d-search-container"+`${type}`}>

        {children}
    </div>;
}

export default DSearchContainer;