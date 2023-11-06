import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';

import { theme } from '../../../styles';
import Button, { ButtonProps } from './Button';

const TestComponent = (props: ButtonProps) => (
	<ThemeProvider theme={theme}>
		<Button {...props}>Button</Button>
	</ThemeProvider>
);

describe('Button 컴포넌트', () => {
	it('Button 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const buttonElement = screen.getByRole('button');

		expect(buttonElement).toBeInTheDocument();
	});

	it('한 번 클릭시 이벤트 호출하는지 확인', () => {
		const mockClickHandler = vi.fn();
		render(<TestComponent onClick={mockClickHandler} />);
		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);

		expect(mockClickHandler).toHaveBeenCalledTimes(1);
	});

	it('disabled 상태인 경우 클릭 이벤트 호출하지 않는지 확인', () => {
		const mockClickHandler = vi.fn();
		render(<TestComponent onClick={mockClickHandler} disabled />);
		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);

		expect(mockClickHandler).toHaveBeenCalledTimes(0);
	});

	it('로딩 상태인 경우 클릭 이벤트 호출하지 않는지 확인', () => {
		const mockClickHandler = vi.fn();
		render(<TestComponent onClick={mockClickHandler} $loading />);
		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);

		expect(mockClickHandler).toHaveBeenCalledTimes(0);
	});
});
