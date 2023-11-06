import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Flex from './Flex';

describe('Flex', () => {
	it('renders headline', () => {
		render(<Flex />);
		screen.debug();
	});
});
