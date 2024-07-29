import React, {ReactNode} from "react";
import RImageHeaderPanel from "./RImageHeaderPanel";
import RInstructionPanel from "./RInstructionPanel.tsx";
import RNamePanel from "./RNamePanel.tsx";
import RStepsSubpanel from "./RStepsSubpanel.tsx";
import RDesrciptionPanel from "./RDesrciptionPanel.tsx";
import RIngredentListPanel from "./RIngredentListPanel.tsx";



interface Props {
    children?: ReactNode;

}
//RInstruction needs to generate a list of steps subpanels based of global store values

//possiple feature: be able to

const ReaderView: React.FC<Props> = ({children}) => {
    return <div>
        <RImageHeaderPanel></RImageHeaderPanel>
        <RNamePanel>Name</RNamePanel>
        <RDesrciptionPanel>
            xszdlkfjsovn wsoefjwsal;fvjnw;ofvjnfa';oleihfwsid jvwsjnvwsnvwo evjsdnvwrevslh vnwebw'eioghwnqa'eotgfjhdlbn
        </RDesrciptionPanel>
        <RIngredentListPanel>
            {"1 sifvjsoimvwoeij epifvwjeop\n"}
            {"2 wseifjws[oe fmnefn eq[kfjmme\n"}
            {"3 slejfwsomvwserogmfwerog\n"}
        </RIngredentListPanel>
        <RInstructionPanel>

                <RStepsSubpanel>sdgsgfawvAZSDvawegf</RStepsSubpanel>
                <RStepsSubpanel>sdjvjsovnwefvjsevjnwerovn</RStepsSubpanel>

        </RInstructionPanel>
        {children}
    </div>
}

export default ReaderView;

