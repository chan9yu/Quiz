import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';

import { theme } from '../../../styles';
import ChoiceItem, { ChoiceItemProps } from './ChoiceItem';

const TestComponent = (props: ChoiceItemProps) => (
	<ThemeProvider theme={theme}>
		<ChoiceItem {...props} />
	</ThemeProvider>
);

describe('ChoiceItem 컴포넌트', () => {
	it('ChoiceItem 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const choiceItemElement = screen.getByRole('button');

		expect(choiceItemElement).toBeInTheDocument();
	});

	it('ChoiceItem 클릭 이벤트 확인', () => {
		const onClickMock = vi.fn();
		render(<TestComponent onClick={onClickMock} />);
		const choiceItemElement = screen.getByRole('button');

		fireEvent.click(choiceItemElement);

		expect(onClickMock).toBeCalled();
	});

	it('ChoiceItem 정답 상태 확인', () => {
		render(<TestComponent selected answerStatus="correct" />);
		const choiceItemElement = screen.getByRole('button');

		expect(choiceItemElement).toHaveStyle({
			borderColor: theme.color.success[500]
		});
	});

	it('ChoiceItem 오답 상태 확인', () => {
		render(<TestComponent selected answerStatus="incorrect" />);
		const choiceItemElement = screen.getByRole('button');

		expect(choiceItemElement).toHaveStyle({
			borderColor: theme.color.error[500]
		});
	});

	it('ChoiceItem 선택된 상태 확인', () => {
		render(<TestComponent selected />);
		const choiceItemElement = screen.getByRole('button');

		expect(choiceItemElement).toHaveStyle({
			backgroundColor: theme.color.gray[200]
		});
	});

	it('ChoiceItem 클릭 가능한 상태 확인', () => {
		render(<TestComponent answerStatus="correct" />);
		const choiceItemElement = screen.getByRole('button');

		fireEvent.click(choiceItemElement);

		expect(choiceItemElement).toHaveStyle({
			pointerEvents: 'none'
		});
	});
});
