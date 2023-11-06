import { render } from '@testing-library/react';
import React from 'react';

import TestTemplate from './TestTemplate';

const useRender = (children: JSX.Element | JSX.Element[]) => {
	return render(<TestTemplate>{children}</TestTemplate>);
};

export default useRender;
