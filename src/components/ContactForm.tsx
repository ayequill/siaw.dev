import {
	FaEnvelope,
	FaMapMarked,
	FaPhone,
	FaRegPaperPlane,
} from 'react-icons/fa';
import {
	Box,
	Heading,
	Text,
	Grid,
	Textarea,
	Input,
	Flex,
	Icon,
	Button,
} from '@chakra-ui/react';
export default function Contact() {
	return (
		<Box as="section" id="contact" layerStyle="sectionStyles" mb="3rem">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Contact Me
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				Get in touch
			</Text>
			<Grid gap="1.5rem" gridTemplateColumns={[null, 'repeat(2,1fr)']}>
				<Box>
					<Flex mb={8} alignItems="center" gap="0.2rem">
						<Icon
							as={FaPhone}
							fontSize="3xl"
							color="brand.primary"
							mr=".75rem"
						/>
						<Box>
							<Heading fontSize="2xl" fontWeight="500">
								Call Me
							</Heading>
							<Text color="brand.textSecondary">+233552501449</Text>
						</Box>
					</Flex>

					<Flex mb={8} alignItems="center" gap="0.2rem">
						<Icon
							as={FaEnvelope}
							fontSize="3xl"
							color="brand.primary"
							mr=".75rem"
						/>
						<Box>
							<Heading fontSize="2xl" fontWeight="500">
								Email Me
							</Heading>
							<Text color="brand.textSecondary">siawnic.dev@gmail.com</Text>
						</Box>
					</Flex>

					<Flex mb={8} alignItems="center" gap="0.2rem">
						<Icon
							as={FaMapMarked}
							fontSize="3xl"
							color="brand.primary"
							mr=".75rem"
						/>
						<Box>
							<Heading fontSize="2xl" fontWeight="500">
								Location
							</Heading>
							<Text color="brand.textSecondary">Ghana - Accra</Text>
						</Box>
					</Flex>
				</Box>
				<Grid
					as="form"
					gap={['1.5rem']}
					name="contact__form"
					method="POST"
					width={[null, null, '460px']}
				>
					<input type="hidden" name="form-name" value="contact__form" />
					<Grid gap={['1.5rem']} gridTemplateColumns={[null, 'repeat(2, 1fr)']}>
						<Box
							bg="brand.inputColor"
							borderRadius=".5rem"
							p={['0.75rem 1rem 0.25rem']}
						>
							<label color="brand.titleColor" htmlFor="name">
								Name:{' '}
							</label>
							<Input
								w={['100%']}
								bg="brand.inputColor"
								color="brand.textColor"
								border="none"
								outline="none"
								p={['0.25rem 0.5rem .5rem 0']}
								type="text"
								name="name"
								focusBorderColor="none"
							/>
						</Box>
						<Box
							bg="brand.inputColor"
							borderRadius=".5rem"
							p={['0.75rem 1rem 0.25rem']}
						>
							<label color="brand.titleColor" htmlFor="email">
								Email:{' '}
							</label>
							<Input
								w={['100%']}
								bg="brand.inputColor"
								color="brand.textColor"
								border="none"
								outline="none"
								p={['0.25rem 0.5rem .5rem 0']}
								type="email"
								name="email"
							/>
						</Box>
					</Grid>
					<Box
						className="contact__content"
						bg="brand.inputColor"
						borderRadius=".5rem"
						p={['0.75rem 1rem 0.25rem']}
					>
						<label color="brand.titleColor" htmlFor="project">
							Project{' '}
						</label>
						<Input
							w={['100%']}
							bg="brand.inputColor"
							color="brand.textColor"
							border="none"
							outline="none"
							p={['0.25rem 0.5rem .5rem 0']}
							type="text"
							name="project"
						/>
					</Box>
					<Box
						bg="brand.inputColor"
						borderRadius=".5rem"
						p={['0.75rem 1rem 0.25rem']}
					>
						<label color="brand.titleColor" htmlFor="">
							Message{' '}
						</label>
						<Textarea
							w={['100%']}
							bg="brand.inputColor"
							color="brand.textColor"
							border="none"
							outline="none"
							p={['0.25rem 0.5rem .5rem 0']}
							name="message"
							id=""
							cols={0}
							rows={7}
						></Textarea>
					</Box>

					<Box>
						<Button
							type="submit"
							display="inline-flex"
							textDecoration="none"
							color="white"
							fontWeight="bold"
							bg="brand.linear"
							borderRadius="0.5rem"
							padding="1rem"
							columnGap=".3rem"
							_hover={{ textDecoration: 'none', bgColor: 'brand.primary' }}
							alignItems="center"
							boxShadow="lg"
							// href="#contact"
						>
							Send Message
							<FaRegPaperPlane className="button__icon" />
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
