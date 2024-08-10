import React from "react";

interface Props {
    data: any;
}

const NextBackContainer:React.FC<Props> = (data) => {
    //handle clicks need to call a function that updates the que of the list in the parant coponent and possiple make network calls

    return <div className="next-back-container">
        <button className='next-b' onClick={() => {
        }}></button>
        <button className='back-b' onClick={() => {
        }}></button>
    </div>
}