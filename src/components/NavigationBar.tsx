import React, { useState } from 'react';
import {
	FaBriefcase,
	FaFileCode,
	FaHome,
	FaUser,
	FaYinYang,
	FaRegPaperPlane,
	FaTimes,
	FaMoon,
	FaSun,
	FaBars,
} from 'react-icons/fa';
import { Box, Flex, IconButton, Link } from '@chakra-ui/react';
import { LayoutWrapper } from './LayoutWrapper';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavigationBar: React.FC = () => {
	const [isOpen, setOpen] = useState(false);

	const handleShowMenu = (): void => {
		setOpen(!isOpen);
	};
	return (
		<>
			<Box
				w="100%"
				pos="fixed"
				bottom={[0, null, 'initial']}
				top={[null, null, '0']}
				left="0"
				zIndex="1000"
				as="header"
			>
				<LayoutWrapper>
					<Flex
						as="nav"
						h="3em"
						alignItems="center"
						justifyContent="space-between"
					>
						<Link
							_hover={{ color: 'brand.primary' }}
							href="#home"
							fontSize="2xl"
							fontWeight="bold"
						>
							siaw.dev
						</Link>
						<Flex
							position="fixed"
							bottom={isOpen ? 0 : '-100%'}
							left="0"
							width="100%"
							p="2rem 1.5rem 4rem"
							boxShadow="0 -1px 4px rgba(0,0,0,.15)"
							borderRadius="1.5rem 1.5rem 0 0"
							transition="0.3s"
							alignItems="center"
						>
							<Box
								listStyleType="none"
								w="100%"
								display="grid"
								gridTemplateColumns="repeat(3,1fr)"
								gap="1.5rem"
								columnGap={{ base: '0' }}
							>
								<Box as="li">
									<Link
										_hover={{ color: 'brand.primary' }}
										alignItems="center"
										href="#home"
										display="flex"
										flexDir="column"
									>
										<FaHome />
										Home
									</Link>
								</Box>

								<Box as="li">
									<Link
										_hover={{ color: 'brand.primary' }}
										alignItems="center"
										href="#about"
										display="flex"
										flexDir="column"
									>
										<FaUser />
										About
									</Link>
								</Box>

								<Box as="li">
									<Link
										_hover={{ color: 'brand.primary' }}
										alignItems="center"
										href="#skills"
										display="flex"
										flexDir="column"
									>
										<FaFileCode />
										Skills
									</Link>
								</Box>

								<Box as="li">
									<Link
										_hover={{ color: 'brand.primary' }}
										alignItems="center"
										href="#services"
										display="flex"
										flexDir="column"
									>
										<FaBriefcase />
										Services
									</Link>
								</Box>

								<Box as="li">
									<Link
										_hover={{ color: 'brand.primary' }}
										alignItems="center"
										href="#portfolio"
										display="flex"
										flexDir="column"
									>
										<FaYinYang />
										Portfolio
									</Link>
								</Box>

								<Box as="li">
									{/*<Link _hover={{ color: 'brand.primary' }} alignItems="center" href="#contact" display= 'flex' flexDir='column'>*/}
									<Link
										layerStyle="navLinkStyles"
										_hover={{ color: 'brand.primary' }}
									>
										<FaRegPaperPlane />
										Contactme
									</Link>
								</Box>
							</Box>
						</Flex>
						{/*<IconButton position='absolute' bottom='0.5rem' right='1.3rem'  icon={<FaTimes />} aria-label='Close Button' onClick={handleShowMenu} />*/}
						<Flex alignItems="center">
							{/* Theme change btn */}
							<ColorModeSwitcher
								aria-label="Toggle theme"
								fontSize="1.25rem"
								mb="1"
							/>
							<IconButton
								aria-label="Toggle menu"
								icon={<FaBars />}
								onClick={handleShowMenu}
								fontSize="1.25rem"
								mb="1"
							/>
						</Flex>
					</Flex>
				</LayoutWrapper>
			</Box>
		</>
	);
};

export default NavigationBar;
