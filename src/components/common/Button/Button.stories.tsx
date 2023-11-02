import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components';

const meta = {
	title: 'Components/Common/Button',
	component: Button,
	tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Button'
	}
};
