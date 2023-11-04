import type { Meta, StoryObj } from '@storybook/react';
import styled, { css } from 'styled-components';

import Flex from './Flex';

const Item = styled.div`
	width: 100px;
	height: 45px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;

	${({ theme }) => css`
		background-color: ${theme.color.primary[500]};
		color: ${theme.color.gray[50]};
		font-size: ${theme.typography.size[200]};
	`}

	&::before {
		content: 'Item';
	}
`;

/**
 * `display: flex` 속성을 지원하는 컴포넌트로 레이아웃 구성을 쉽게 할 수 있는 컴포넌트입니다.
 */
const meta = {
	title: 'Components/Common/Flex',
	component: Flex,
	tags: ['autodocs'],
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } }
	},
	parameters: {
		componentSubtitle: 'Flex 컴포넌트'
	}
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - Flex 컴포넌트의 기본 상태입니다.
 */
export const Default: Story = {
	args: {
		children: Array.from({ length: 4 }).map((_, i) => <Item key={i} />),
		$gap: 8
	}
};

/**
 * - 기본적으로 Flex 컴포넌트는 div 태그로 랜더링이 됩니다.
 * - 필요한 경우 tag라는 속성을 이용해서 원하는 html tag로 랜더링할 수 있습니다.
 */
export const Tag: Story = {
	...Default,
	render: args => <Flex {...args} tag="main" />
};

/**
 * - flex의 `justify-content`을 제공하는 속성입니다.
 * - 기본적으로 `flex-start` 가 적용됩니다.
 */
export const JustifyContent: Story = {
	...Default,
	render: args => <Flex {...args} $justifyContent="center" />
};

/**
 * - flex의 `align-items`을 제공하는 속성입니다.
 * - 기본적으로 `flex-start` 가 적용됩니다.
 */
export const AlignItems: Story = {
	...Default,
	render: args => <Flex {...args} $alignItems="center" $height={200} />
};

/**
 * - 기본적으로 Flex 컴포넌트는 항목을 열에 가로로 정렬합니다.
 * - `direction` 속성을 이용해서 연속적으로 세로로 배치하게 할 수 있습니다.
 */
export const Direction: Story = {
	...Default,
	render: args => <Flex {...args} $direction="column" />
};

/**
 * - flex의 `gap`을 제공하는 속성입니다.
 * - number만 입력하게 되면 자동으로 px단위로 계산됩니다.
 */
export const Gap: Story = {
	...Default,
	render: args => <Flex {...args} $gap={20} />
};

/**
 * - flex의 `flex-wrap`을 제공하는 속성입니다.
 * - 기본적으로 `nowrap` 값으로 설정되어 있습니다.
 */
export const FlexWrap: Story = {
	...Default,
	decorators: [
		Story => (
			<div style={{ width: '240px' }}>
				<Story />
			</div>
		)
	],
	render: args => <Flex {...args} $flexWrap="wrap" />
};

/**
 * - 해당 Flex 컴포넌트의 너비를 부모 요소에 기준으로 꽉 채웁니다.
 */
export const FullWidth: Story = {
	...Default,
	render: args => (
		<Flex {...args} $fullWidth style={{ background: '#eaeaea' }}>
			{Array.from({ length: 8 }).map((_, i) => (
				<Item key={i} />
			))}
		</Flex>
	)
};

/**
 * - 해당 Flex 컴포넌트의 높이와 너비를 설정합니다.
 * - number만 입력하게 되면 자동으로 px단위로 계산됩니다.
 */
export const WidthAndHeight: Story = {
	...Default,
	render: args => <Flex {...args} $width={600} $height={200} style={{ background: '#eaeaea' }} />
};
