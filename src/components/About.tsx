import { Box, Grid, Heading, Icon, Text, Link, Image } from '@chakra-ui/react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import avatar from '../assets/me.jpeg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cv from '../assets/docs/cv.pdf';

export default function About() {
	return (
		<Box id="about" as="section" layerStyle="sectionStyles" px="1rem">
			<Heading mb={4} fontSize="4xl">
				About me
			</Heading>
			<Text as="span" fontSize="xl" mb={8}>
				My Introduction
			</Text>
			{/*ABout Container*/}
			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
				<Box>
					<Image w={{ base: '200px', md: '300px' }} src={avatar} alt="" />
				</Box>
				{/*About Data*/}
				<Box>
					<Text mb={4}>
						Hello my name is Siaw Nicholas, A Web developer with extensive
						knowledge and years of experience, working in web technologies and
						Ui / Ux design, delivering quality work.
					</Text>
					{/*About Info*/}
					<Grid templateColumns="repeat(3, 1fr)" gap={4} mb={8}>
						<Box>
							<Text fontSize="2xl" fontWeight="bold" mb={2}>
								1
							</Text>
							<Text fontSize="lg">Year experience</Text>
						</Box>
						<Box>
							<Text fontSize="2xl" fontWeight="bold" mb={2}>
								5+
							</Text>
							<Text fontSize="lg">Completed project</Text>
						</Box>
						<Box>
							<Text fontSize="2xl" fontWeight="bold" mb={2}>
								4+
							</Text>
							<Text fontSize="lg">Companies worked</Text>
						</Box>
					</Grid>
					{/*About Buttons*/}
					<Box>
						{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
						<Link variant="brandPrimary" download="Siaw's CV" href={cv}>
							{/* <Box
								display="inline-flex"
								alignItems="center"
								px={4}
								py={2}
								color="white"
								fontWeight="semibold"
								bg="blue.500"
								borderRadius="md"
								_hover={{ bg: 'blue.600' }}
							> */}
							Download CV
							<Icon fontSize="xl" as={FaCloudDownloadAlt} ml={2} />
							{/* </Box> */}
						</Link>
					</Box>
				</Box>
			</Grid>
		</Box>
	);
}
