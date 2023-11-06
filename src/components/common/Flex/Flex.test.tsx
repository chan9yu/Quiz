import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../styles';
import Flex, { FlexProps } from './Flex';

const TestComponent = (props: FlexProps) => (
	<ThemeProvider theme={theme}>
		<Flex {...props}>Item</Flex>
	</ThemeProvider>
);

describe('Flex 컴포넌트', () => {
	it('Flex 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toBeInTheDocument();
	});

	it('Flex 컴포넌트의 tag 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent tag="main" />);
		const mainElement = screen.getByRole('region');

		expect(mainElement).toBeInTheDocument();
	});

	it('Flex 컴포넌트의 justifyContent 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $justifyContent="center" />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('justify-content: center;');
	});

	it('Flex 컴포넌트의 alignItems 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $alignItems="center" />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('align-items: center;');
	});

	it('Flex 컴포넌트의 direction 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $direction="column" />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('flex-direction: column;');
	});

	it('Flex 컴포넌트의 gap 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $gap={20} />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('gap: 20px;');
	});

	it('Flex 컴포넌트의 flexGrow 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $flexGrow="1" />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('flex-grow: 1;');
	});

	it('Flex 컴포넌트의 flexWrap 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $flexWrap="wrap" />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('flex-wrap: wrap;');
	});

	it('Flex 컴포넌트의 fullWidth 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $fullWidth />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('width: 100%;');
	});

	it('Flex 컴포넌트의 width와 height 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $width={300} $height={150} />);
		const flexElement = screen.getByRole('region');

		expect(flexElement).toHaveStyle('width: 300px;');
		expect(flexElement).toHaveStyle('height: 150px;');
	});
});
