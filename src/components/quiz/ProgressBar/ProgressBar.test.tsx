import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../styles';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

const TestComponent = (props: ProgressBarProps) => (
	<ThemeProvider theme={theme}>
		<ProgressBar {...props} />
	</ThemeProvider>
);

describe('ProgressBar 컴포넌트', () => {
	it('ProgressBar 컴포넌트 렌더링 확인', () => {
		render(<TestComponent percent={0} />);
		const progressBarElement = screen.getByRole('progressbar');

		expect(progressBarElement).toBeInTheDocument();
	});

	it('percent 속성에 따라 ProgressBar가 올바르게 렌더링되는지 확인', () => {
		render(<TestComponent percent={100} />);
		const progressBarElement = screen.getByRole('progressbar');

		expect(progressBarElement).toHaveStyle({
			width: '100%'
		});
	});
});
