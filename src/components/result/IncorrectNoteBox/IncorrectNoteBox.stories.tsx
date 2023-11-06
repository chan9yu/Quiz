import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../..';
import IncorrectNoteBox from './IncorrectNoteBox';

const meta = {
	title: 'Components/Result/IncorrectNoteBox',
	component: IncorrectNoteBox,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'IncorrectNoteBox 컴포넌트'
	}
} satisfies Meta<typeof IncorrectNoteBox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - IncorrectNoteBox 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		answer: '2006년 11월 11일',
		question: '플레이스테이션 3는 언제 출시됐나요?'
	}
};

/**
 * - 사용예시 입니다.
 */
export const Example: Story = {
	...Default,
	args: {
		...Default.args
	},
	decorators: [
		Story => (
			<Flex $direction="column" $gap={8}>
				<Story />
			</Flex>
		)
	],
	render: args => (
		<>
			<IncorrectNoteBox {...args} />
			<IncorrectNoteBox {...args} answer="Polska" question="What is the name of Poland in Polish?" />
			<IncorrectNoteBox
				{...args}
				answer="Uno"
				question="Which of the following card games revolves around numbers and basic math?"
			/>
			<IncorrectNoteBox
				{...args}
				answer="Yellow"
				question="When someone is cowardly, they are said to have what color belly?"
			/>
		</>
	)
};
