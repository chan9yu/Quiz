import type { Meta, StoryObj } from '@storybook/react';
import ResultChart from './ResultChart';

const meta = {
	title: 'Components/Result/ResultChart',
	component: ResultChart,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'ResultChart 컴포넌트'
	}
} satisfies Meta<typeof ResultChart>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - chartjs를 이용한 ResultChart 컴포넌트 입니다.
 */
export const Default: Story = {
	args: {
		correctCount: 8,
		incorrectCount: 2
	}
};
