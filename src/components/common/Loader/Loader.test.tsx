import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Loader from './Loader';

describe('Loader', () => {
	it('renders headline', () => {
		render(<Loader />);
		screen.debug();
	});
});
