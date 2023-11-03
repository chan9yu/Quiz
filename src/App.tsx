import { ThemeProvider } from 'styled-components';

import { RootRouter } from './routes';
import { GlobalStyle, theme } from './styles';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RootRouter />
		</ThemeProvider>
	);
};

export default App;
