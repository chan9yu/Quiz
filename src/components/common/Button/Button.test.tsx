import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Button from './Button';

describe('Button', () => {
	it('renders headline', () => {
		render(<Button />);
		screen.debug();
	});
});
