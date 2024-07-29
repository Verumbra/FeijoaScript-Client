import React, {ReactNode} from "react";

import "./css/SideNav.css";

interface ChildProps {
    children?: ReactNode;
}

const SideNav: React.FC<ChildProps> = ({children}) => {
    return <div className="sidenav">
        <a className="homepage">
            <button>A</button>
        </a>
        <a className="librarypage">
            <button>A</button>
        </a>
        <a className="homepage">
            <button>A</button>
        </a>
        <a className="homepage">
            <button>A</button>
        </a>
        {children}
    </div>
}

export default SideNav;