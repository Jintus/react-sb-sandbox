import {Meta, StoryObj} from "@storybook/react";
import {Icon} from "./Icon.tsx";

const meta = {
    title: 'Component/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        name: 'info'
    }
};