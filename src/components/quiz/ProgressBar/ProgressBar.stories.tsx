import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../..';
import ProgressBar from './ProgressBar';

const meta = {
	title: 'Components/Quiz/ProgressBar',
	component: ProgressBar,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'ProgressBar 컴포넌트'
	}
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - ProgressBar 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		percent: 0
	}
};

/**
 * - percent 속성을 이용해 ProgressBar 컴포넌트의 UI를 변경하여 사용자에게 진행상황을 쉽게 알려줄 수 있습니다.
 * - `0 ~ 100 사이에 숫자만` 입력가능합니다.
 */
export const Percent: Story = {
	...Default,
	decorators: [
		Story => (
			<Flex $direction="column" $gap={12}>
				<Story />
			</Flex>
		)
	],
	render: args => (
		<>
			<ProgressBar {...args} />
			<ProgressBar {...args} percent={20} />
			<ProgressBar {...args} percent={40} />
			<ProgressBar {...args} percent={60} />
			<ProgressBar {...args} percent={80} />
			<ProgressBar {...args} percent={100} />
		</>
	)
};
