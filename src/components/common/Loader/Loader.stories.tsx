import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '..';
import Loader from './Loader';

/**
 * 로딩 상태를 UI에 노출하기 위한 컴포넌트입니다.
 */
const meta = {
	title: 'Components/Common/Loader',
	component: Loader,
	tags: ['autodocs'],
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } }
	},
	parameters: {
		componentSubtitle: 'Loader 컴포넌트'
	},
	decorators: [
		Story => (
			<Flex $alignItems="center" $gap={10}>
				<Story />
			</Flex>
		)
	]
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - Loader 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {}
};

/**
 * - Theme Foundation에 정의한 `Color`를 사용하여 Loader 컴포넌트의 색상을 변경할 수 있습니다.
 */
export const Color: Story = {
	...Default,
	render: args => (
		<>
			<Loader {...args} $color="primary" />
			<Loader {...args} $color="secondary" />
			<Loader {...args} $color="gray" />
			<Loader {...args} $color="info" />
			<Loader {...args} $color="error" />
			<Loader {...args} $color="success" />
			<Loader {...args} $color="warning" />
		</>
	)
};

/**
 * - Loader 컴포넌트에 `position`속성을 지정할 수 있습니다.
 */
export const Position: Story = {
	...Default,
	decorators: [
		Story => (
			<div style={{ position: 'relative', width: '100%', height: '100px' }}>
				<Story />
			</div>
		)
	],
	render: args => <Loader {...args} $position="absolute" style={{ top: '20px', left: '20px' }} />
};

/**
 * - Loader 컴포넌트에 크기를 지정할 수 있습니다.
 * - number만 입력하게 되면 자동으로 px 단위로 계산됩니다.
 */
export const Size: Story = {
	...Default,
	render: args => (
		<>
			<Loader {...args} $size={30} />
			<Loader {...args} $size={35} />
			<Loader {...args} $size={40} />
			<Loader {...args} $size={45} />
			<Loader {...args} $size={50} />
		</>
	)
};
