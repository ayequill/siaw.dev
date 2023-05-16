import { Box, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CustomButton from './Button';

export const Home = () => {
	return (
		<Grid
			as="section"
			id="home"
			layerStyle="sectionStyles"
			gap={{ base: '1rem' }}
		>
			<Grid
				rowGap={{ md: '5rem' }}
				layerStyle="wrapper"
				border="3px black solid"
			>
				<Grid
					pt={{ base: '2.5rem', lg: '5.5rem' }}
					columnGap={{ lg: 8 }}
					alignItems="center"
					gridTemplateColumns={{ base: '0.5fr 3fr', md: 'max-content 1fr 1fr' }}
				>
					<Grid
						gridTemplateColumns="max-content"
						rowGap={4}
						alignItems="center"
					>
						<Link
							color="brand.primary"
							href="https://www.linkedin.com/in/nicholas-siaw-8824a6175/"
							rel="noreferrer"
							target="_blank"
						>
							{<FaLinkedin size="1.5rem" />}
						</Link>
						<Link
							color="brand.primary"
							href="https://www.twitter.com/ayequill"
							target="_blank"
							rel="noreferrer"
						>
							{<FaTwitter size="1.5rem" />}
						</Link>
						<Link
							color="brand.primary"
							href="http://github.com/ayequill"
							target="_blank"
							rel="noreferrer"
						>
							{<FaGithub size="1.5rem" />}
						</Link>
					</Grid>
					<Box w="260px" h="260"></Box>
					<Box gridColumn={{ base: '1/3', md: 'initial' }}>
						<Heading>Siaw A. Nicholas</Heading>
						<Text color="brand.text" mb={3.5}>
							Frontend Developer
						</Text>
						<Text mb={8}>
							High level experience in web design and development knowledge,
							producing quality work.
						</Text>
						<CustomButton
							variant="brandPrimary"
							href="#contact"
							label="Contact Me"
						/>
					</Box>
				</Grid>
				<Box>
					<a href="#about">Scroll down</a>
				</Box>
			</Grid>
		</Grid>
	);
};
