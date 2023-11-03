import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Modal from './Modal';

describe('Modal', () => {
	it('renders headline', () => {
		render(<Modal />);
		screen.debug();
	});
});
