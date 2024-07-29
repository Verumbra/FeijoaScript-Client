import type {Meta, StoryObj} from "@storybook/react";



import JournalView from "../components/JournalView/JournalView.tsx";

const meta: Meta<typeof JournalView> = {
    title: "Journal",
    component: JournalView,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof JournalView>;
export const Primary: Story = {
    args: {
        //todo
    }
};