import type { Decorator, Parameters } from '@storybook/react';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '../src/styles';

Chart.register(ArcElement, Tooltip, Legend);

export const decorators: Decorator[] = [
	(Story, context) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story {...context} />
		</ThemeProvider>
	)
];

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
