import { ThemeProvider } from 'styled-components';

import { RootRouter } from './routes';
import { GlobalStyle } from './styles';

const App = () => {
	return (
		<ThemeProvider theme={{}}>
			<GlobalStyle />
			<RootRouter />
		</ThemeProvider>
	);
};

export default App;
