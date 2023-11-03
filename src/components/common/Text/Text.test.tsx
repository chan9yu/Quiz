import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Text from './Text';

describe('Text', () => {
	it('renders headline', () => {
		render(<Text />);
		screen.debug();
	});
});
