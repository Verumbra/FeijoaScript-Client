import React, {ReactNode} from "react";


interface Props {
    children?: ReactNode;
}


const OptionBar: React.FC<Props> = ({ children }) => {
    return <div className='optionbar-container'>
        <div className='context-container'>
            {/*todo impilment function that get the current page and returns the aporeat components*/}

        </div>
        <div className='search-option-container'>
            {/*todo search components*/}

        </div>
            {/*todo other context function*/}

        {children}
    </div>;
}

export default OptionBar;