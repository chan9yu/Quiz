import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '..';
import Text from './Text';

/**
 * Typography 파운데이션 지정 값을 기준으로 만들어진 Text 컴포넌트입니다.
 */
const meta = {
	title: 'Components/Common/Text',
	component: Text,
	tags: ['autodocs'],
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } }
	},
	parameters: {
		componentSubtitle: 'Text 컴포넌트'
	},
	decorators: [
		Story => (
			<Flex $direction="column" $gap={10}>
				<Story />
			</Flex>
		)
	]
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - Text 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		children: 'Text Component'
	}
};

/**
 * - 기본적으로 Text 컴포넌트는 `span` 태그로 렌더링이 됩니다.
 * - 필요한 경우 tag라는 속성을 이용해서 원하는 html tag로 렌더링할 수 있습니다.
 */
export const Tag: Story = {
	...Default,
	render: args => <Text {...args} tag="h2" />
};

/**
 * - Theme Foundation에 정의한 `Color`를 사용하여 Text 컴포넌트의 색상을 변경할 수 있습니다.
 */
export const Color: Story = {
	...Default,
	render: args => (
		<>
			<Text {...args} $color="gray" />
			<Text {...args} $color="primary" $colorLevel="500" />
			<Text {...args} $color="secondary" $colorLevel="500" />
			<Text {...args} $color="info" $colorLevel="500" />
			<Text {...args} $color="error" $colorLevel="500" />
			<Text {...args} $color="warning" $colorLevel="500" />
			<Text {...args} $color="success" $colorLevel="500" />
		</>
	)
};

/**
 * - `Color`의 가중치를 변경할 수 있습니다.
 */
export const ColorLevel: Story = {
	...Default,
	render: args => (
		<>
			<Text {...args} $color="gray" $colorLevel="50" />
			<Text {...args} $color="gray" $colorLevel="100" />
			<Text {...args} $color="gray" $colorLevel="200" />
			<Text {...args} $color="gray" $colorLevel="300" />
			<Text {...args} $color="gray" $colorLevel="400" />
			<Text {...args} $color="gray" $colorLevel="500" />
			<Text {...args} $color="gray" $colorLevel="600" />
			<Text {...args} $color="gray" $colorLevel="700" />
			<Text {...args} $color="gray" $colorLevel="800" />
			<Text {...args} $color="gray" $colorLevel="900" />
		</>
	)
};

/**
 * - Theme Foundation에 정의한 `Size`를 사용하여 Text 컴포넌트의 크기를 변경할 수 있습니다.
 */
export const Size: Story = {
	...Default,
	render: args => (
		<>
			<Text {...args} $size="50" />
			<Text {...args} $size="75" />
			<Text {...args} $size="100" />
			<Text {...args} $size="200" />
			<Text {...args} $size="300" />
			<Text {...args} $size="400" />
			<Text {...args} $size="500" />
			<Text {...args} $size="600" />
			<Text {...args} $size="700" />
			<Text {...args} $size="800" />
			<Text {...args} $size="900" />
		</>
	)
};

/**
 * - Theme Foundation에 정의한 `Weight`를 사용하여 Text 컴포넌트의 굵기 정도를 변경할 수 있습니다.
 */
export const Weight: Story = {
	...Default,
	render: args => (
		<>
			<Text {...args} $weight="regular" />
			<Text {...args} $weight="medium" />
			<Text {...args} $weight="bold" />
		</>
	)
};
