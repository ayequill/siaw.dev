import { ChakraProvider } from '@chakra-ui/react';
import About from './components/About';
import { Home } from './components/Home';
import NavigationBar from './components/NavigationBar';
import Portfolio from './components/Portfolio';
import { Qualification } from './components/Qualification';
import { Skills } from './components/Skills';
import { theme } from './theme/chakra.theme';
export default function App() {
	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<ChakraProvider theme={theme} resetCSS>
			<NavigationBar />
			<Home />
			<About />
			<Skills />
			<Qualification />
			<Portfolio />
		</ChakraProvider>
	);
}
