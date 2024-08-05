import  type {Meta, StoryObj} from "@storybook/react";
//import {within, userEvent, expect} from "@storybook/test";

import viewSlice from "../slices/ViewSlice.ts"
import {configureStore} from "@reduxjs/toolkit";


import SideNav from '../components/SideNav.tsx';
import {Provider} from "react-redux";
import {ReactNode} from "react";

interface ChildProps {
    children?: ReactNode;
}

const store = configureStore({
    reducer: {
        view: viewSlice,
    }
});

const meta: Meta<typeof SideNav> = {
    title: 'Side Navigation Bar',
    component: SideNav,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs']

};

const Template: StoryObj<typeof SideNav> =({children: ReactNode}) => (
    <Provider store={store}>
        <SideNav></SideNav>
    </Provider>
)

 export const Default = Template.bind({});

export default meta;
type Story = StoryObj<typeof SideNav>;
export const Primary: Story = {
    args: {
        //todo
    }
};