import {ReactNode} from "react";

import HPreviewContainer from "../components/HomeView/HPreviewContainer.tsx";
import HRPreviewWrapper from "../components/HomeView/HRPreviewWrapper.tsx";
import RecipePreviewer from "../components/RecipePreviewer.tsx";

import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";




//rewrite these function to be inline in the component that needs them after the global store is correctly configured

export function HRecipePreviewProcessor(props:number): ReactNode[] {
    console.log(props);
    let previewListSize = useSelector((state:RootState) => state.homePreviewList[props].previewList.length);


    //console.log("value of: "+ sizeofList);
    let Builder:ReactNode[] = [];

    switch (true) {
        case previewListSize==0 || previewListSize==null || previewListSize==undefined:
            return Builder;
        case previewListSize==1:
            break
        case previewListSize>1:
            let i = 0
            while (i<previewListSize) {
                Builder.push(<RecipePreviewer  key={i} type="Home" placeKey={i} catKey={props} indexKey={i}></RecipePreviewer>)
                i++
            }
            break

    }
    return Builder
}

function getListName(index:number):string[] {
    let name:string[] = [];
    let i = 0
    while(i<index) {
        name.push(useSelector((state: RootState) => state.homePreviewList[i].name));
        i++
    }
    return name;
}

//title prop is to be used to give the name of the preview section that wraps the list of cards, while the inputList prop is to be used to select the recuder action that fetches the data from the store or database
export function HPreviewContainerProcessor(inputList:number):ReactNode[] {
    //console.log("in function HPreviewContainerProcessor title: "+ title +"inputList: "+inputList);

    let titleList:string[] = getListName(inputList);
    let Builder:ReactNode[] = [];

    switch (true) {
        case (inputList==undefined || inputList==null):
            //todo
            break;

        case (inputList == 0):
            Builder.push(<div className="h-home-view" key={0}>
                <HPreviewContainer title={titleList[0]}>
                    <HRPreviewWrapper previewListIndex={0}/>
                </HPreviewContainer>
            </div>)
            break

        case (inputList >= 1):
            let i = 0
            while (i<inputList){
                console.log("in HPreviewContainerProcessor loop with the size of previewListIndex "+ i+ " of the "+titleList[i]+" container")
                Builder.push(<div className="h-home-view" key={i}>
                    <HPreviewContainer title={titleList[i]}>
                        <HRPreviewWrapper previewListIndex={i}/>
                    </HPreviewContainer>
                </div>)
                i++
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