import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../src/styles';

interface TestTemplateProps {
	children: ReactNode;
}

const TestTemplate = ({ children }: TestTemplateProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TestTemplate;
