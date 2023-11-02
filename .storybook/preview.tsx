import { ThemeProvider } from 'styled-components';
import type { Decorator, Parameters } from '@storybook/react';
import React from 'react';

import { GlobalStyle } from '../src/styles';

export const decorator: Decorator = (Story, context) => (
	<ThemeProvider theme={{}}>
		<GlobalStyle />
		<Story {...context} />
	</ThemeProvider>
);

export const parameters: Parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*'
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: ['Foundation', '*']
		}
	}
};
