import { useState, FC } from 'react';
import {
	FaBriefcase,
	FaFileCode,
	FaHome,
	FaUser,
	FaYinYang,
	FaRegPaperPlane,
	FaBars,
} from 'react-icons/fa';
import {
	Box,
	Flex,
	IconButton,
	Link,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavigationBar: FC = () => {
	const [isOpen, setOpen] = useState(false);

	const navBg = useColorModeValue('white', 'black');

	const handleShowMenu = (): void => {
		setOpen(!isOpen);
	};
	return (
		<Box
			as="header"
			w="100%"
			pos={['fixed', null, 'unset']}
			bottom={[0, null, 'initial']}
			// top={[null, null, '0']}
			// left={[null, null, '0']}
			zIndex="1000"
			p={{ base: '0.4rem 1rem', md: '0 2rem' }}
			columnGap={[null, null, '1rem']}
			justifyContent={{ md: 'center' }}
			display={{ md: 'flex' }}
			bgColor={navBg}
			boxShadow="inner"
			// mx={{ md: '1.5rem' }}
		>
			<Flex
				as="nav"
				alignItems="center"
				justifyContent="space-between"
				h={['3.5rem', null, '4rem']}
				columnGap={{ md: '1rem' }}
				w={{ base: '100%', lg: '90%' }}
			>
				<Link
					_hover={{ color: 'brand.primary' }}
					href="#home"
					fontSize="2xl"
					fontWeight="bold"
					// bgGradient="linear(to-l, brand.primary, brand.primaryDark)"
					// bgClip="text"
					color="brand.primary"
				>
					siaw.dev
				</Link>
				<Flex
					role="menu"
					aria-expanded={isOpen}
					// position={['fixed', '', null, null]}
					pos={{ base: 'fixed', md: 'unset' }}
					bottom={isOpen ? 0 : '-100%'}
					left="0"
					width="100%"
					p={['2rem 1.5rem 4rem', null, '0rem']}
					boxShadow={{ base: '0 -1px 4px rgba(0,0,0,.15)', md: 'none' }}
					borderRadius={{ base: '1.5rem 1.5rem 0 0', md: '0' }}
					transition="0.3s"
					alignItems="center"
					bgColor={navBg}
					ml={[null, null, 'auto']}
					// justifyContent="center"
				>
					<Box
						as="ul"
						listStyleType="none"
						w="100%"
						display={['grid', null, 'flex']}
						gridTemplateColumns="repeat(3,1fr)"
						gap={['1.5rem', null, '2rem']}
						justifyContent={{ md: 'end' }}
						fontSize="1rem"
					>
						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								_hover={{ color: 'brand.primary' }}
								href="#home"
							>
								<Icon as={FaHome} display={{ md: 'none' }} />
								Home
							</Link>
						</Box>

						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								href="#about"
								_hover={{ color: 'brand.primary' }}
							>
								<Icon as={FaUser} display={{ md: 'none' }} />
								About
							</Link>
						</Box>

						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								_hover={{ color: 'brand.primary' }}
								href="#skills"
							>
								<Icon as={FaFileCode} display={{ md: 'none' }} />
								Skills
							</Link>
						</Box>

						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								_hover={{ color: 'brand.primary' }}
								href="#services"
							>
								<Icon as={FaBriefcase} display={{ md: 'none' }} />
								Services
							</Link>
						</Box>

						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								_hover={{ color: 'brand.primary' }}
								href="#portfolio"
							>
								<Icon as={FaYinYang} display={{ md: 'none' }} />
								Portfolio
							</Link>
						</Box>

						<Box as="li">
							<Link
								layerStyle="navLinkStyles"
								_hover={{ color: 'brand.primary' }}
								id="#contact"
							>
								<Icon as={FaRegPaperPlane} display={{ md: 'none' }} />
								Contact
							</Link>
						</Box>
					</Box>
				</Flex>
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
						variant="unstyled"
						display={{ base: 'flex', md: 'none' }}
						justifyContent="center"
					/>
				</Flex>
			</Flex>
		</Box>
	);
};

export default NavigationBar;
