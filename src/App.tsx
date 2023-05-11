import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakra.theme';

export default function App() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return <ChakraProvider theme={theme} />;
}
