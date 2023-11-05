import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import type { SelectData } from '../../../@types';
import Select from './Select';

/**
 * 컴파운드 컴포넌트 패턴으로 구현된 Select 컴포넌트입니다.
 */
const meta = {
	title: 'Components/Common/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		children: { table: { disable: true } }
	},
	parameters: {
		componentSubtitle: 'Select 컴포넌트'
	},
	decorators: [
		Story => (
			<div style={{ height: '250px' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * - Select 컴포넌트의 사용예시입니다.
 */
export const Default: Story = {
	render: args => {
		const [selectData, setSelectData] = useState<SelectData>({ value: '5', label: '5문제' });
		const onChange = (data: SelectData) => setSelectData(data);

		return (
			<Select {...args} selectData={selectData} onChange={onChange}>
				<Select.Trigger selectLabel="질문 수를 선택해주세요! (최대 10문제)" />
				<Select.Options>
					<Select.Option value="5" label="5문제" />
					<Select.Option value="6" label="6문제" />
					<Select.Option value="7" label="7문제" />
					<Select.Option value="8" label="8문제" />
					<Select.Option value="9" label="9문제" />
					<Select.Option value="10" label="10문제" />
				</Select.Options>
			</Select>
		);
	}
};
