import { ChakraProvider } from '@chakra-ui/react';
import About from './components/About';
import { Home } from './components/Home';
import NavigationBar from './components/NavigationBar';
import Portfolio from './components/Portfolio';
import { Qualification } from './components/Qualification';
import { Skills } from './components/Skills';
import { theme } from './theme/chakra.theme';
import { SectionWrapper } from './components/SectionWrapper';
import Project from './components/Project';
import Contact from './components/ContactForm';
export default function App() {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<NavigationBar />
			<SectionWrapper>
				<Home />
				<About />
				<Skills />
				<Qualification />
				<Portfolio />
				<Project />
				<Contact />
			</SectionWrapper>
		</ChakraProvider>
	);
}
