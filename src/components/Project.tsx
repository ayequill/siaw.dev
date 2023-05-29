import { Box, Grid, Text, Link, Image, Icon } from '@chakra-ui/react';
import { FaRegPaperPlane } from 'react-icons/fa';
import project from '../assets/14.png';

export default function Project() {
	return (
		<>
			<Box
				as="section"
				layerStyle="sectionStyles"
				textAlign={['center', 'initial']}
				bgColor="brand.primary"
				borderRadius={[null, null, '1rem']}
				// p="0"
				minH="0"
			>
				<Box>
					<Grid
						gap={['1.5em', null, '0 3rem']}
						// p={[null, '3rem 2.5rem 0']}
						gridTemplateColumns={[null, 'repeat(2,1fr)']}
						alignContent="center"
					>
						<Box color="white" pt={[null, null, '0.8rem']}>
							<Text fontSize="2rem" mb=".75rem">
								{' '}
								Got a new project in mind?
							</Text>
							<Text mb="1.5rem">
								Connect me now and get a 30% discount on your new project.
							</Text>
							<Link
								href="#contact"
								variant="brandPrimary"
								bg="white"
								color="brand.primary"
								_hover={{ bg: 'white' }}
							>
								Contact Me
								<Icon as={FaRegPaperPlane} />
								{/* <FaRegPaperPlane className="button__icon" /> */}
							</Link>
						</Box>
						<Box alignSelf="center">
							<Image src={project} alt="project discussion image" />
						</Box>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
