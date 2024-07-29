import type {Meta, StoryObj} from "@storybook/react";


import ReaderView from "../components/ReaderView/ReaderView.tsx";
import RecipePreviewer from "../components/RecipePreviewer.tsx";

const meta: Meta<typeof ReaderView> = {
    title: "Reader",
    component: ReaderView,
    parameters: {
        layout: "center",
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RecipePreviewer>;
export const Primary: Story = {
    args: {
        //todo
    }
};