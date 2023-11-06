import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../..';
import ChoiceItem from './ChoiceItem';

const meta = {
	title: 'Components/Quiz/ChoiceItem',
	component: ChoiceItem,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'ChoiceItem 컴포넌트'
	}
} satisfies Meta<typeof ChoiceItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - ChoiceItem 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		children: '첫번째 지문입니다!',
		prefixNumber: 1,
		onClick: () => alert('click test')
	}
};

/**
 * - 퀴즈에 대한 지문이 4개인 상황입니다.
 */
export const Multiple: Story = {
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
			<ChoiceItem {...args} prefixNumber={1}>
				Javascript
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={2}>
				Python
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={3}>
				C#
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={4}>
				Java
			</ChoiceItem>
		</>
	)
};

/**
 * - 정답을 선택할 때
 */
export const Correct: Story = {
	...Default,
	args: {
		...Default.args,
		answerStatus: 'correct'
	},
	decorators: [
		Story => (
			<Flex $direction="column" $gap={12}>
				<Story />
			</Flex>
		)
	],
	render: args => (
		<>
			<ChoiceItem {...args} prefixNumber={1} selected isCorrect>
				Javascript
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={2}>
				Python
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={3}>
				C#
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={4}>
				Java
			</ChoiceItem>
		</>
	)
};

/**
 * - 오답을 선택할 때
 */
export const Incorrect: Story = {
	...Default,
	args: {
		...Default.args,
		answerStatus: 'incorrect'
	},
	decorators: [
		Story => (
			<Flex $direction="column" $gap={12}>
				<Story />
			</Flex>
		)
	],
	render: args => (
		<>
			<ChoiceItem {...args} prefixNumber={1} isCorrect>
				Javascript
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={2} selected>
				Python
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={3}>
				C#
			</ChoiceItem>
			<ChoiceItem {...args} prefixNumber={4}>
				Java
			</ChoiceItem>
		</>
	)
};
