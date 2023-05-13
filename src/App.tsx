import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra.theme';
import NavigationBar from './components/NavigationBar';
export default function App() {
	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<ChakraProvider theme={theme} resetCSS>
			<NavigationBar />
		</ChakraProvider>
	);
}
