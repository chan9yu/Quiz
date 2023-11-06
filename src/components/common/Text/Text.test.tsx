import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../styles';
import Text, { TextProps } from './Text';

const TestComponent = (props: TextProps) => (
	<ThemeProvider theme={theme}>
		<Text {...props}>Text Component</Text>
	</ThemeProvider>
);

describe('Test 컴포넌트', () => {
	it('Test 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const textElement = screen.getByRole('text');

		expect(textElement).toBeInTheDocument();
	});

	it('커스텀 태그로 렌더링되는지 확인', () => {
		render(<TestComponent tag="div" />);
		const divElement = screen.getByRole('text');

		expect(divElement.tagName.toLowerCase()).toBe('div');
	});

	it('색상이 제대로 렌더링되는지 확인', () => {
		render(<TestComponent $color="primary" />);
		const textElement = screen.getByRole('text');

		expect(textElement).toHaveStyle('color: ' + theme.color.primary['900']);
	});

	it('크기가 제대로 렌더링되는지 확인', () => {
		render(<TestComponent $size="400" />);
		const textElement = screen.getByRole('text');

		expect(textElement).toHaveStyle('font-size: ' + theme.typography.size['400']);
	});

	it('굵기가 제대로 렌더링되는지 확인', () => {
		render(<TestComponent $weight="medium" />);
		const textElement = screen.getByRole('text');

		expect(textElement).toHaveStyle('font-weight: ' + theme.typography.weight.medium);
	});
});
