import type {Meta, StoryObj} from "@storybook/react";

import {configureStore} from "@reduxjs/toolkit";

//import ReaderView from "../components/ReaderView/ReaderView.tsx";
import ReaderViewMock from "./Mock Components/ReaderViewMock.tsx";
import RecipePreviewer from "../components/RecipePreviewer.tsx";


import {Provider} from "react-redux";
import recipeListSlice from "../slices/RecipeSlice.ts";

import RecipeTestData from "./mock data/RecipeTestData.ts";

const store = configureStore({
    reducer:{
        recipeList: recipeListSlice,
    }
})

const meta: Meta<typeof ReaderViewMock> = {
    title: "Reader",
    component: ReaderViewMock,
    parameters: {
        layout: "center",
    },
    tags: ['autodocs']
};
//const dispatch = useDispatch();
//const setTestData = dispatch(updateActive(RecipeTestData),[])


const Template: StoryObj<typeof ReaderViewMock> = ({children: any})=> (



    <Provider store={store}>
        <ReaderViewMock></ReaderViewMock>
    </Provider>
)

export const Primary = Template.bind({});

export default meta;
type Story = StoryObj<typeof RecipePreviewer>;
/*export const Primary: Story = {
    args: {
        //todo
    }
};*/