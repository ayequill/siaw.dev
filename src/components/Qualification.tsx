import { Box, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import { data } from '../misc/experience.data';
import { FaBriefcase, FaCalendar, FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';

const workElements = data.work.map(
	({ duration, id, institute, shift, title }) => (
		<Box key={id}>
			<Grid gridTemplateColumns="1fr max-content 1fr" columnGap="1.5rem">
				{shift && <Box></Box>}

				{shift && (
					<Box>
						<Box
							as="span"
							display="inline-block"
							w="13px"
							h="13px"
							backgroundColor="brand.primary"
							borderRadius="50%"
						></Box>
						<Box
							as="span"
							display="block"
							width="1px"
							h="100%"
							bgColor="brand.primary"
							transform="translate(6px, -7px)"
						></Box>
					</Box>
				)}
				<Box>
					<Heading>{title}</Heading>
					<Box as="span" mb={4}>
						<Text>{institute}</Text>
					</Box>
					<Box>
						<Icon as={FaCalendar} />
						{duration}
					</Box>
				</Box>

				{!shift && (
					<Box>
						<Box
							as="span"
							display="inline-block"
							w="13px"
							h="13px"
							backgroundColor="brand.primary"
							borderRadius="50%"
						></Box>
						<Box
							as="span"
							display="block"
							width="1px"
							h="100%"
							bgColor="brand.primary"
							transform="translate(6px, -7px)"
						></Box>
					</Box>
				)}
			</Grid>
		</Box>
	)
);

const educationElements = data.education.map(
	({ duration, id, institute, shift, title }) => (
		<Box key={id}>
			<Grid gridTemplateColumns="1fr max-content 1fr" columnGap="1.5rem">
				{shift && <Box></Box>}

				{shift && (
					<Box>
						<Box
							as="span"
							display="inline-block"
							w="13px"
							h="13px"
							backgroundColor="brand.primary"
							borderRadius="50%"
						></Box>
						<Box
							as="span"
							display="block"
							width="1px"
							h="100%"
							bgColor="brand.primary"
							transform="translate(6px, -7px)"
						></Box>
					</Box>
				)}
				<Box>
					<Heading>{title}</Heading>
					<Box as="span" mb={4}>
						<Text>{institute}</Text>
					</Box>
					<Box>
						<Icon as={FaCalendar} />
						{duration}
					</Box>
				</Box>

				{!shift && (
					<Box>
						<Box
							as="span"
							display="inline-block"
							w="13px"
							h="13px"
							backgroundColor="brand.primary"
							borderRadius="50%"
						></Box>
						<Box
							as="span"
							display="block"
							width="1px"
							h="100%"
							bgColor="brand.primary"
							transform="translate(6px, -7px)"
						></Box>
					</Box>
				)}
			</Grid>
		</Box>
	)
);
export const Qualification = () => {
	const [showQualification, setShowQualification] = useState(true);

	function handleClick(): void {
		setShowQualification(!showQualification);
	}
	return (
		<Box as="section" id="qualification" layerStyle="sectionStyles">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Qualification
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				My Journey
			</Text>
			{/*Container*/}
			<Grid layerStyle="wrapper">
				<Flex justifyContent="space-evenly" mb={8}>
					<Box
						fontSize="1.2rem"
						cursor="pointer"
						_hover={{ color: 'brand.primary' }}
						display="inline-flex"
						columnGap="0.3rem"
						fontWeight="500"
						alignItems="center"
						color={showQualification ? 'brand.primary' : ''}
						onClick={handleClick}
					>
						<Icon fontSize="1.8rem" mr={1} as={FaGraduationCap} />
						<Text>Education</Text>
					</Box>
					<Box
						fontSize="1.2rem"
						cursor="pointer"
						_hover={{ color: 'brand.primary' }}
						display="inline-flex"
						columnGap="0.3rem"
						fontWeight="500"
						color={!showQualification ? 'brand.primary' : ''}
						alignItems="center"
						onClick={handleClick}
					>
						<Icon fontSize="1.8rem" mr={1} as={FaBriefcase} />
						<Text>Work</Text>
					</Box>
				</Flex>
				<Grid gridTemplateColumns={[null, '.6fr']} justifyContent="center">
					{showQualification && educationElements}
					{!showQualification && workElements}
				</Grid>
			</Grid>
		</Box>
	);
};
