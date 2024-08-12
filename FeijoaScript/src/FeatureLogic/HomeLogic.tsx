import React, {ReactNode} from "react";
import RecipePreview from "../Models/PreviewModel.ts";
import HPreviewContainer from "../components/HomeView/HPreviewContainer.tsx";




function HRecipePreviewProcessor(): ReactNode[] {
    let sizefoList:number;
    let Builder:ReactNode[] = [];


}

function HPreviewContainerProcessor(title:string[],inputList:RecipePreview[]):ReactNode[] {
    let sizefoList = inputList.length;
    let Builder:ReactNode[] = [];

    switch (true) {
        case (!sizefoList || !title.length):
            //todo
            break;
        case (sizefoList != title.length):
            if (sizefoList > title.length) {
                return Builder.push(<div>Not found</div>)
            }
            else {
                return Builder.push(<div>Not found</div>)
            }

        case (sizefoList == 1):
            break

        case (sizefoList >= 1):
            for (let i=0; i<sizefoList; i++) {
                Builder.push(<div className="h-home-view" key={i}>
                    <HPreviewContainer title={title[i]}>
                        {//todo
                            HRecipePreviewProcessor()
                        }
                    </HPreviewContainer>
                </div>)
            }
            break
    }


    return Builder /*<div className="h-home-view" key={i}>
        <HPreviewContainer title={title[i]}>
            {//todo
                HRecipePreviewProcessor()
            }
        </HPreviewContainer>
    </div>*/
}