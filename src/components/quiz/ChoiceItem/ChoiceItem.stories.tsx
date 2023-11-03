import type { Meta, StoryObj } from '@storybook/react';
import ChoiceItem from './ChoiceItem';

const meta = {
	title: 'Components/Quiz/ChoiceItem',
	component: ChoiceItem,
	tags: ['autodocs']
} satisfies Meta<typeof ChoiceItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'ChoiceItem'
	}
};
