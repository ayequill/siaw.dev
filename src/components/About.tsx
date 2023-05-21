import {
	Box,
	Grid,
	Heading,
	Icon,
	Text,
	Link,
	Image,
	Flex,
} from '@chakra-ui/react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import avatar from '../assets/me.jpeg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cv from '../assets/docs/cv.pdf';

export default function About() {
	return (
		<Box id="about" as="section" layerStyle="sectionStyles">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				About me
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				My Introduction
			</Text>
			{/*ABout Container*/}
			<Grid
				templateColumns={[null, 'repeat(2, 1fr)']}
				layerStyle="wrapper"
				gap={['1.5rem', '0 5rem', '0 10rem']}
			>
				<Image
					w={{ base: '200px', md: '300px' }}
					src={avatar}
					alt="Siaw Pic"
					alignSelf="center"
					borderRadius="md"
					justifySelf="center"
					filter="drop-shadow(0 1px 2px #121212)"
				/>
				{/*About Data*/}
				<Box>
					<Text mb={10} textAlign={['center', null, 'left']}>
						Hello my name is Siaw Nicholas, A Web developer with extensive
						knowledge and years of experience, working in web technologies and
						Ui / Ux design, delivering quality work.
					</Text>
					{/*About Info*/}
					<Grid
						templateColumns="repeat(3, 1fr)"
						rowGap={8}
						mb={10}
						alignContent="space-evenly"
						justifyContent={[null, null, 'space-between']}
						textAlign="center"
					>
						<Box>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								mb={2}
								color="brand.primary"
							>
								1
							</Text>
							<Text fontSize="lg">Year experience</Text>
						</Box>
						<Box>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								mb={2}
								color="brand.primary"
							>
								5+
							</Text>
							<Text fontSize="lg">Completed project</Text>
						</Box>
						<Box>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								mb={2}
								color="brand.primary"
							>
								4+
							</Text>
							<Text fontSize="lg">Companies worked</Text>
						</Box>
					</Grid>
					{/*About Buttons*/}
					<Box>
						<Flex justifyContent={['center', null, 'normal']}>
							{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
							<Link variant="brandPrimary" download="Siaw's CV" href={cv}>
								Download CV
								<Icon fontSize="xl" as={FaCloudDownloadAlt} ml={2} />
							</Link>
						</Flex>
					</Box>
				</Box>
			</Grid>
		</Box>
	);
}
