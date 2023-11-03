import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import ChoiceItem from './ChoiceItem';

describe('ChoiceItem', () => {
	it('renders headline', () => {
		render(<ChoiceItem />);
		screen.debug();
	});
});
