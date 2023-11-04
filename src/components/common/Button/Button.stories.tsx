import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex } from '../../../components';

/**
 * 사용자의 상호작용을 위한 버튼 컴포넌트 입니다.
 */
const meta = {
	title: 'Components/Common/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } }
	},
	parameters: {
		componentSubtitle: 'Button 컴포넌트'
	},
	decorators: [
		Story => (
			<Flex $alignItems="center" $gap={10}>
				<Story />
			</Flex>
		)
	]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - Button 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		children: 'Button'
	}
};

/**
 * - Theme Foundation에 정의한 `Color`를 사용하여 Button 컴포넌트의 색상을 변경할 수 있습니다.
 */
export const Color: Story = {
	...Default,
	render: args => (
		<>
			<Button {...args} $color="primary" />
			<Button {...args} $color="secondary" />
			<Button {...args} $color="gray" />
			<Button {...args} $color="info" />
			<Button {...args} $color="error" />
			<Button {...args} $color="success" />
			<Button {...args} $color="warning" />
		</>
	)
};

/**
 * - 로딩 상태를 버튼 UI에 노출하기 위한 속성입니다.
 */
export const Loading: Story = {
	...Default,
	render: args => (
		<>
			<Button {...args} $loading $color="primary" />
			<Button {...args} $loading $color="secondary" />
			<Button {...args} $loading $color="gray" />
			<Button {...args} $loading $color="info" />
			<Button {...args} $loading $color="error" />
			<Button {...args} $loading $color="success" />
			<Button {...args} $loading $color="warning" />
		</>
	)
};

/**
 * - 버튼을 비활성화 상태로 변경할 수 있는 속성입니다.
 */
export const Disabeld: Story = {
	...Default,
	render: args => (
		<>
			<Button {...args} disabled $color="primary" />
			<Button {...args} disabled $color="secondary" />
			<Button {...args} disabled $color="gray" />
			<Button {...args} disabled $color="info" />
			<Button {...args} disabled $color="error" />
			<Button {...args} disabled $color="success" />
			<Button {...args} disabled $color="warning" />
		</>
	)
};

/**
 * - 버튼의 크기를 정의할 수 있는 속성입니다.
 */
export const Size: Story = {
	...Default,
	render: args => (
		<>
			<Button {...args} $size="sm" />
			<Button {...args} $size="md" />
			<Button {...args} $size="lg" />
		</>
	)
};

/**
 * - Button 컴포넌트의 너비를 부모 요소에 기준으로 꽉 채웁니다.
 */
export const FullWidth: Story = {
	...Default,
	render: args => <Button {...args} $fullWidth />
};

/**
 * - Button 컴포넌트의 너비를 설정합니다.
 * - number만 입력하게 되면 자동으로 px 단위로 계산됩니다.
 */
export const Width: Story = {
	...Default,
	render: args => <Button {...args} $width={500} />
};
