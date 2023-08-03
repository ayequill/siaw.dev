import { Box, Icon, Heading, Text, Flex } from '@chakra-ui/react';
import {
	SiHtml5,
	SiC,
	SiGit,
	SiJavascript,
	SiLinux,
	SiMaterialUi,
	SiReact,
	SiSass,
	SiTypescript,
	SiDocker,
	SiPython,
	SiShell,
	SiGnubash,
} from 'react-icons/si';

export const Skills = () => {
	return (
		<Box layerStyle="sectionStyles" id="skills">
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
			<Flex
				flexWrap="wrap"
				gap="2rem"
				justifyContent="center"
				maxW={[null, null, '800px']}
				margin={[null, null, '0 auto']}
			>
				<Box borderBottom="3px solid #F7DF1E">
					<Icon as={SiJavascript} fontSize={'6rem'} color="#F7DF1E" />
					<Text textAlign="center" borderTop="3px solid #F7DF1E">
						javascript
					</Text>
				</Box>
				<Box borderBottom="3px solid #3570a0">
					<Icon as={SiPython} fontSize={'6rem'} color="#ffd94a" />
					<Text textAlign="center" borderTop="3px solid #3570a0">
						python
					</Text>
				</Box>
				<Box borderBottom="3px solid #31b644">
					<Icon as={SiGnubash} fontSize={'6rem'} color="#2d3a3e" />
					<Text textAlign="center" borderTop="3px solid #31b644">
						bash
					</Text>
				</Box>
				<Box borderBottom="3px solid #61DAFB">
					<Icon as={SiReact} fontSize={'6rem'} color="#61DAFB" />
					<Text textAlign="center" borderTop="3px solid #61DAFB">
						react
					</Text>
				</Box>
				<Box borderBottom="3px solid #A8B9CC">
					<Icon as={SiC} fontSize={'6rem'} color="#A8B9CC" />
					<Text textAlign="center" borderTop="3px solid #A8B9CC">
						C
					</Text>
				</Box>
				<Box borderBottom="3px solid #E34F26">
					<Icon as={SiHtml5} fontSize={'6rem'} color="#E34F26" />
					<Text textAlign="center" borderTop="3px solid #E34F26">
						html
					</Text>
				</Box>
				<Box borderBottom="3px solid #CC6699">
					<Icon as={SiSass} fontSize={'6rem'} color="#CC6699" />
					<Text textAlign="center" borderTop="3px solid #CC6699">
						scss
					</Text>
				</Box>
				<Box borderBottom="3px solid #3178C6">
					<Icon as={SiTypescript} fontSize={'6rem'} color="#3178C6" />
					<Text textAlign="center" borderTop="3px solid #3178C6">
						typescript
					</Text>
				</Box>
				<Box borderBottom="3px solid #2496ED">
					<Icon as={SiDocker} fontSize={'6rem'} color="#2496ED" />
					<Text textAlign="center" borderTop="3px solid #2496ED">
						docker
					</Text>
				</Box>
				<Box borderBottom="3px solid #007FFF">
					<Icon as={SiMaterialUi} fontSize={'6rem'} color="#007FFF" />
					<Text textAlign="center" borderTop="3px solid #007FFF">
						material-ui
					</Text>
				</Box>
				<Box borderBottom="3px solid #F05032">
					<Icon as={SiGit} fontSize={'6rem'} color="#F05032" />
					<Text textAlign="center" borderTop="3px solid #F05032">
						git
					</Text>
				</Box>
				<Box borderBottom="3px solid #FCC624">
					<Icon as={SiLinux} fontSize={'6rem'} color="#FCC624" />
					<Text textAlign="center" borderTop="3px solid #FCC624">
						linux
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};
