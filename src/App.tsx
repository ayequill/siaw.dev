import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';
import NavigationBar from './components/NavigationBar';
import { theme } from './theme/chakra.theme';
import { SectionWrapper } from './components/SectionWrapper';
export default function App() {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<NavigationBar />
			<SectionWrapper>
				{/*	<Home />*/}
				{/*	<About />*/}
				{/*	<Skills />*/}
				{/*	<Qualification />*/}
				{/*	<Portfolio />*/}
				{/*	<Project />*/}
				{/*	<Contact />*/}
				<Router />
			</SectionWrapper>
			{/*<Footer />*/}
		</ChakraProvider>
	);
}
