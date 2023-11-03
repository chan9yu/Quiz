import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
	it('renders headline', () => {
		render(<ProgressBar />);
		screen.debug();
	});
});
