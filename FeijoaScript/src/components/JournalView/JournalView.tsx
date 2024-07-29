import React, {ReactNode} from "react";

import  "../css/JournalView.css";
import ImageHeaderPanel from "./ImageHeaderPanel.tsx";
import NamePanel from "./NamePanel.tsx";
import DesrciptionPanel from "./DesrciptionPanel.tsx";
import IngredentListPanel from "./IngredentListPanel.tsx";
import InstructionPanel from "./InstructionPanel.tsx";

interface Props {
    children?: ReactNode;
}

const JournalView: React.FC<Props> = ({children}) => {
    return <div className="jounalview">
        <ImageHeaderPanel>ImageHeader</ImageHeaderPanel>
        <NamePanel>Name</NamePanel>
        <DesrciptionPanel>Desricption</DesrciptionPanel>
        <IngredentListPanel>Ingredents</IngredentListPanel>
        <InstructionPanel>Instructions</InstructionPanel>
        {children}
    </div>;
}

export default JournalView;