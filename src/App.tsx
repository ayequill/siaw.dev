import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/chakra.theme';
import NavigationBar from './components/NavigationBar';
import { Home } from './components/Home';
export default function App() {
	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<ChakraProvider theme={theme} resetCSS>
			<NavigationBar />
			<Home />
		</ChakraProvider>
	);
}
