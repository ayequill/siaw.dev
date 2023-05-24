import { Box, Grid, Heading, Text, Image, Link, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { portfolioData } from '../misc/portfolio.data';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

const portfolioItems = portfolioData.map(
	({ title, desc, demoUrl, repoUrl, desktopImgSrc, mobileImgSrc, tags }, i) => {
		return (
			<Grid
				key={i}
				gridTemplateColumns={[null, 'repeat(2, 1fr)']}
				// bgColor="brand.bodyColor"
				borderRadius={1}
				p={8}
				columnGap={[null, null, 20]}
				alignItems={[null, null, 'center']}
			>
				<Grid
					gridTemplateColumns="1fr .5fr"
					justifyContent="space-between"
					alignItems="center"
					gap={8}
				>
					<Image
						borderRadius={2}
						filter="drop-shadow(0 0 5px #121212)"
						src={desktopImgSrc}
						alt={title}
					/>
					<Image
						borderRadius={2}
						filter="drop-shadow(0 0 5px #121212)"
						justifySelf="start"
						src={mobileImgSrc}
						alt={title}
						w="80px"
					/>
				</Grid>
				<Box>
					<Heading fontSize="1.125rem" mb=".5rem">
						{title}
					</Heading>
					<Text mb=".75rem">{desc}</Text>
					<Flex gap={3} mb={4}>
						{tags.map((tag, tagIndex) => (
							<Text
								key={tagIndex}
								px=".5rem"
								borderRadius=".5rem"
								fontStyle="italic"
								bg="brand.primary"
								textShadow="2xl"
							>
								{tag}
							</Text>
						))}
					</Flex>
					<Flex gap="3em">
						<Link
							_hover={{ transform: 'translateX(0.25rem)' }}
							variant="brandPrimary"
							href={demoUrl}
							isExternal
							p="0.75rem 1rem"
						>
							Demo
							<FaArrowRight transform="translateX(0.25rem)" />
						</Link>
						<Link
							_hover={{ transform: 'translateX(0.25rem)' }}
							variant="brandPrimary"
							href={repoUrl}
							isExternal
							p="0.75rem 1rem"
						>
							Source
							<FaGithub transform="translateX(0.25rem)" />
						</Link>
					</Flex>
				</Box>
			</Grid>
		);
	}
);

const Portfolio: FC = () => {
	return (
		<Box as="section" layerStyle="sectionStyles">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Portfolio
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				My Recent Works
			</Text>
			<Grid rowGap={16} overflow="initial">
				{portfolioItems}
			</Grid>
		</Box>
	);
};
export default Portfolio;
