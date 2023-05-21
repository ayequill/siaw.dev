import { Box, Grid, Icon, Heading, Text, Flex } from '@chakra-ui/react';
import {
	FaHtml5,
	SiC,
	SiGit,
	SiJava,
	SiJavascript,
	SiLinux,
	SiMaterialUi,
	SiReact,
	SiSass,
	SiTypescript,
} from 'react-icons/all';

export const Skills = () => {
	return (
		<Grid layerStyle="sectionStyles">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Tech-Stack
			</Heading>
			<Text
				fontSize="xl"
				mb={[12, 16]}
				textAlign="center"
				// bgGradient="linear(to-r, green.300, green.900)"
				// bgClip="text"
			>
				Languages & Tools
			</Text>
			<Flex flexWrap="wrap" gap="2rem" justifyContent="center">
				<Box>
					<Icon as={SiJavascript} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						javascript
					</Text>
				</Box>
				<Box>
					<Icon as={FaHtml5} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						html
					</Text>
				</Box>
				<Box>
					<Icon as={SiSass} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						scss
					</Text>
				</Box>
				<Box>
					<Icon as={SiReact} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						react
					</Text>
				</Box>
				<Box>
					<Icon as={SiC} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						C
					</Text>
				</Box>
				<Box>
					<Icon as={SiTypescript} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						typescript
					</Text>
				</Box>
				<Box>
					<Icon as={SiJava} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						java
					</Text>
				</Box>
				<Box>
					<Icon as={SiMaterialUi} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						material-ui
					</Text>
				</Box>
				<Box>
					<Icon as={SiGit} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						git
					</Text>
				</Box>
				<Box>
					<Icon as={SiLinux} fontSize={'6rem'} />
					<Text textAlign="center" borderTop="3px solid black">
						linux
					</Text>
				</Box>
			</Flex>
		</Grid>
	);
};
