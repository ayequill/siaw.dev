import {
	FaEnvelope,
	FaMapMarked,
	FaPhone,
	FaRegPaperPlane,
} from 'react-icons/fa';
import { Box, Heading, Text, Grid } from '@chakra-ui/react';
export default function Contact() {
	return (
		<Box as="section" className="contact section" id="contact">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Portfolio
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				My Recent Works
			</Text>
			<Grid className="contact__container container grid">
				<Box>
					<Box className="contact__information">
						<FaPhone className="contact__icon" />
						<Box>
							<Heading className="contact__title">Call Me</Heading>
							<Text className="contact__subtitle">+233552501449</Text>
						</Box>
					</Box>

					<Box className="contact__information">
						<FaEnvelope className="contact__icon" />
						<Box>
							<Heading className="contact__title">Email Me</Heading>
							<Text className="contact__subtitle">siawnic.dev@gmail.com</Text>
						</Box>
					</Box>

					<Box className="contact__information">
						<FaMapMarked className="contact__icon" />
						<Box>
							<Heading className="contact__title">Location</Heading>
							<Text className="contact__subtitle">Ghana - Accra</Text>
						</Box>
					</Box>
				</Box>
				<form name="contact__form" method="POST" className="contact__form grid">
					<input type="hidden" name="form-name" value="contact__form" />
					<Box className="contact__inputs grid">
						<Box className="contact__content">
							<label htmlFor="" className="contact__label">
								Name:{' '}
							</label>
							<input type="text" name="name" className="contact__input" />
						</Box>
						<Box className="contact__content">
							<label htmlFor="" className="contact__label">
								Email:{' '}
							</label>
							<input type="email" name="email" className="contact__input" />
						</Box>
					</Box>
					<Box className="contact__content">
						<label htmlFor="" className="contact__label">
							Project{' '}
						</label>
						<input type="text" name="project" className="contact__input" />
					</Box>
					<Box className="contact__content">
						<label htmlFor="" className="contact__label">
							Message{' '}
						</label>
						<textarea
							name="message"
							id=""
							cols="0"
							rows="7"
							className="contact__input"
						></textarea>
					</Box>

					<Box>
						<button
							type="submit"
							href="#contact"
							className="button button button--flex"
						>
							Send Message
							<FaRegPaperPlane className="button__icon" />
						</button>
					</Box>
				</form>
			</Grid>
		</Box>
	);
}
