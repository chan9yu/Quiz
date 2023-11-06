import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it, vi } from 'vitest';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';

import { theme } from '../../../styles';
import ResultChart, { ResultChartProps } from './ResultChart';

const ResizeObserverMock = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn()
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
Chart.register(ArcElement, Tooltip, Legend);

const TestComponent = (props: ResultChartProps) => (
	<ThemeProvider theme={theme}>
		<ResultChart {...props} />
	</ThemeProvider>
);

describe('ResultChart 컴포넌트', () => {
	it('ResultChart 컴포넌트 렌더링 확인', () => {
		render(<TestComponent correctCount={3} incorrectCount={2} />);
		const resultChartElement = screen.getByRole('graphics-document');

		expect(resultChartElement).toBeInTheDocument();
	});

	it('정확한 정답과 오답 데이터를 받아올 때 그래프가 올바르게 렌더링되는지 확인', () => {
		render(<TestComponent correctCount={8} incorrectCount={2} />);
		const resultChartElement = screen.getByRole('graphics-document');

		expect(resultChartElement).toBeInTheDocument();
	});
});
