import  type {Meta, StoryObj} from "@storybook/react";
//import {within, userEvent, expect} from "@storybook/test";


import SideNav from '../components/SideNav.tsx';

const meta: Meta<typeof SideNav> = {
    title: 'Side Navigation Bar',
    component: SideNav,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs']

};

export default meta;
type Story = StoryObj<typeof SideNav>;
export const Primary: Story = {
    args: {
        //todo
    }
};