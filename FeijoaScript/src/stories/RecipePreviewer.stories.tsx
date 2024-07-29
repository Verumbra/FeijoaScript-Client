import type {Meta, StoryObj} from "@storybook/react";


import RecipePreviewer from "../components/RecipePreviewer.tsx";

const meta: Meta<typeof RecipePreviewer> = {
    title: "Recipe Preview Card",
    component: RecipePreviewer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RecipePreviewer>;
export const Primary: Story = {
    args: {
        primary: true,
    },
};
/*
export const Story = Normal: Story = {
    args: {
        primary: false,
    },
};*/