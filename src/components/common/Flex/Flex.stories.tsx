import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

const meta = {
	title: 'Components/Common/Flex',
	component: Flex,
	tags: ['autodocs']
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Flex'
	}
};
