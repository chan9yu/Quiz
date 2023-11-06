import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { theme } from '../../../styles';
import Loader, { LoaderProps } from './Loader';

const TestComponent = (props: LoaderProps) => (
	<ThemeProvider theme={theme}>
		<Loader {...props} />
	</ThemeProvider>
);

describe('Loader 컴포넌트', () => {
	it('Loader 컴포넌트 렌더링 확인', () => {
		render(<TestComponent />);
		const loaderElement = screen.getByRole('status');

		expect(loaderElement).toBeInTheDocument();
	});

	it('Loader 컴포넌트의 color 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $color="primary" />);
		const loaderElement = screen.getByRole('status');

		expect(loaderElement).toHaveStyle('border-bottom: 5px solid ' + theme.color.primary[500]);
	});

	it('Loader 컴포넌트의 position 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $position="absolute" />);
		const loaderElement = screen.getByRole('status');

		expect(loaderElement).toHaveStyle('position: absolute;');
	});

	it('Loader 컴포넌트의 size 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $size={40} />);
		const loaderElement = screen.getByRole('status');

		expect(loaderElement).toHaveStyle('width: 40px;');
		expect(loaderElement).toHaveStyle('height: 40px;');
	});

	it('Loader 컴포넌트의 borderWidth 속성이 제대로 적용되는지 확인', () => {
		render(<TestComponent $borderWidth="3px" />);
		const loaderElement = screen.getByRole('status');

		expect(loaderElement).toHaveStyle('border-width: 3px;');
	});
});
