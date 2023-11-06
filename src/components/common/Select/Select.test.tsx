import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Select from './Select';

describe('Select', () => {
	it('renders headline', () => {
		render(<Select />);
		screen.debug();
	});
});
