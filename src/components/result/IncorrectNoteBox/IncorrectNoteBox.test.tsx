import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../styles';
import IncorrectNoteBox, { IncorrectNoteBoxProps } from './IncorrectNoteBox';

const TestComponent = (props: IncorrectNoteBoxProps) => (
	<ThemeProvider theme={theme}>
		<IncorrectNoteBox {...props} />
	</ThemeProvider>
);

describe('IncorrectNoteBox 컴포넌트', () => {
	it('IncorrectNoteBox 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const incorrectNoteBoxElement = screen.getByRole('alert');

		expect(incorrectNoteBoxElement).toBeInTheDocument();
	});

	it('props에 따라 질문과 정답이 올바르게 렌더링되는지 확인', () => {
		const question = '플레이스테이션 3는 언제 출시됐나요?';
		const answer = '2006년 11월 11일';

		render(<TestComponent question={question} answer={answer} />);
		const questionElement = screen.getByText(question);
		const answerElement = screen.getByText(answer);

		expect(questionElement).toBeInTheDocument();
		expect(answerElement).toBeInTheDocument();
	});
});
