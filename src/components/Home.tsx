import { Box, Grid, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import {
	FaArrowDown,
	FaGithub,
	FaLinkedin,
	FaMouse,
	FaPaperPlane,
	FaTwitter,
} from 'react-icons/fa';

export const Home: FC = () => {
	return (
		<Grid
			as="section"
			id="home"
			layerStyle="sectionStyles"
			gap={{ base: '1rem' }}
		>
			<Grid rowGap={{ md: '5rem' }} layerStyle="wrapper" gap="1rem">
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
							isExternal
						>
							{<FaLinkedin size="1.5rem" />}
						</Link>
						<Link
							color="brand.primary"
							href="https://www.twitter.com/ayequill"
							target="_blank"
							rel="noreferrer"
							isExternal
						>
							{<FaTwitter size="1.5rem" />}
						</Link>
						<Link
							color="brand.primary"
							href="https://github.com/ayequill"
							target="_blank"
							rel="noreferrer"
							isExternal
						>
							{<FaGithub size="1.5rem" />}
						</Link>
					</Grid>
					<Box w="260px" h="260"></Box>
					<Box gridColumn={{ base: '1/3', md: 'initial' }}>
						<Heading
							bgGradient="linear(to-l, brand.primary, brand.primaryDark)"
							bgClip="text"
						>
							Siaw A. Nicholas
						</Heading>
						<Text color="brand.text" mb={3.5}>
							Frontend Developer
						</Text>
						<Text mb={8} color="brand.text">
							High level experience in web design and development knowledge,
							producing quality work.
						</Text>
						<Link
							variant="brandPrimary"
							href="#contact"
							// icon={<FaPaperPlane />}
							// _hover={{ textDecoration: 'none' }}
						>
							Contact Me
							<Icon ml={1} as={FaPaperPlane} />
						</Link>
					</Box>
				</Grid>
				<Box>
					<Link
						href="#about"
						display="inline-flex"
						alignItems="center"
						columnGap="0.3em"
						transition=".3s"
						_hover={{ textDecoration: 'none' }}
					>
						<Icon
							// _hover={{ transform: 'translateY(0.25rem)' }}
							color="brand.primary"
							mr={1}
							fontSize="1.5rem"
							as={FaMouse}
						/>
						<Box as="span" fontSize="sm">
							Scroll down
						</Box>
						<Icon
							fontSize="1.5rem"
							color="brand.primary"
							ml={1}
							as={FaArrowDown}
							_hover={{
								transform: 'translateY(0.25rem)',
								textDecoration: 'none',
							}}
						/>
					</Link>
				</Box>
			</Grid>
		</Grid>
	);
};
