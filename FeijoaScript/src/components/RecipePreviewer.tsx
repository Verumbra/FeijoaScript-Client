import React, {ReactNode} from "react";



import "./css/RecipePreviewer.css";

interface Props {
    children?: ReactNode;
    primary?: boolean;
}
//will contain a recipe projection and on fetch the whole recipe once it's clicked and loading the full recipe page


const RecipePreviewer: React.FC<Props> = ({children,primary}) => {

    const isFirst = primary === true? " first" : "";

    return <div className={"recipepreviewer"+`${isFirst}`}>
        <div className="banner-box">
            <label>name</label>
        </div>
        {children}
    </div>;
}


export default RecipePreviewer;
