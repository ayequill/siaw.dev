import {
	Box,
	Grid,
	Heading,
	List,
	ListItem,
	Link,
	Icon,
	Text,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<Box as="footer" pt={8}>
			<Box p={['2rem 0 3rem', null, '3rem 0 3.5rem']} bg="brand.primary">
				<Grid
					gap="1.5rem"
					rowGap="3.5rem"
					gridTemplateColumns={[null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
					p={[null, null, '1rem']}
					alignItems="center"
				>
					<Box>
						<Heading fontSize="2xl" color="white" mb={1}>
							siaw.dev
						</Heading>
						<Box as="span" color="white">
							Frontend Developer
						</Box>
					</Box>
					<List
						display="flex"
						flexDir={['column', null, 'row']}
						rowGap="1.5rem"
						columnGap={[null, null, '2rem']}
						color="white"
					>
						<ListItem>
							<Link href="#services" className="footer__link">
								Services
							</Link>
						</ListItem>
						<ListItem>
							<Link href="#portfolio" className="footer__link">
								Portfolio
							</Link>
						</ListItem>
						<ListItem>
							<Link href="#contact" className="footer__link">
								Contactme
							</Link>
						</ListItem>
					</List>
					<Box
						justifySelf={[null, null, 'end']}
						color="white"
						fontSize="1.2rem"
					>
						<Link
							target={'_blank'}
							rel="noreferrer"
							href="https://facebook.com/ayequill"
							mr="1.5rem"
						>
							<Icon as={FaFacebook} />
						</Link>

						<Link
							target={'_blank'}
							rel="noreferrer"
							href="https://instagram.com/ayequill"
							mr="1.5rem"
						>
							<Icon as={FaInstagram} />
						</Link>

						<Link
							target={'_blank'}
							rel="noreferrer"
							href="http://twitter.com/ayequill"
							mr="1.5rem"
							className="footer__social"
						>
							<Icon as={FaTwitter} />
						</Link>
					</Box>
				</Grid>

				<Text
					color="whiteAlpha.700"
					fontWeight="600"
					textAlign="center"
					mt="4.5rem"
				>
					&#169; Siaw. All rights reserved.
				</Text>
			</Box>
		</Box>
	);
}
