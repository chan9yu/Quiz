import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from 'styled-components';

import Select, { SelectProps } from './Select';
import { theme } from '../../../styles';

const TestComponent = (props: SelectProps) => (
	<ThemeProvider theme={theme}>
		<Select {...props} selectData={{ label: '5문제', value: '5' }}>
			<Select.Trigger selectLabel="질문 수를 선택해주세요! (최대 10문제)" />
			<Select.Options>
				<Select.Option label="5문제" value="5" />
				<Select.Option label="6문제" value="6" />
				<Select.Option label="7문제" value="7" />
				<Select.Option label="8문제" value="8" />
				<Select.Option label="9문제" value="9" />
				<Select.Option label="10문제" value="10" />
			</Select.Options>
		</Select>
	</ThemeProvider>
);

describe('Select 컴포넌트', () => {
	it('Select 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const selectElement = screen.getByRole('combobox');

		expect(selectElement).toBeInTheDocument();
	});

	it('Select.Trigger 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const triggerElement = screen.getByText('질문 수를 선택해주세요! (최대 10문제)');

		expect(triggerElement).toBeInTheDocument();
	});
});
