import { Grid, Heading, Text } from '@chakra-ui/react';
// import { data } from '../misc/experience.data';

// const workElements = data.work.map(
// 	({ duration, id, institute, shift, title }) => (
// 		<div
// 			data-aos="zoom-in-up"
// 			data-aos-duration="800"
// 			key={id}
// 			className="qualification__content"
// 		>
// 			<div className="qualification__data">
// 				{shift && <div></div>}

// 				{shift && (
// 					<div>
// 						<span className="qualification__rounder"></span>
// 						<span className="qualification__line"></span>
// 					</div>
// 				)}
// 				<div>
// 					<h3 className="qualification__title">{title}</h3>
// 					<span className="qualification__subtitle">{institute}</span>
// 					<div className="qualification__calender">
// 						<FaCalendar />
// 						{duration}
// 					</div>
// 				</div>

// 				{!shift && (
// 					<div>
// 						<span className="qualification__rounder"></span>
// 						<span className="qualification__line"></span>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	)
// );

// const eduElements = data.education.map(
// 	({ duration, id, institute, shift, title }) => (
// 		<div
// 			data-aos="zoom-in-up"
// 			data-aos-duration="800"
// 			key={id}
// 			className="qualification__content"
// 		>
// 			<div className="qualification__data">
// 				{shift && <div></div>}

// 				{shift && (
// 					<div>
// 						<span className="qualification__rounder"></span>
// 						<span className="qualification__line"></span>
// 					</div>
// 				)}
// 				<div>
// 					<h3 className="qualification__title">{title}</h3>
// 					<span className="qualification__subtitle">{institute}</span>
// 					<div className="qualification__calender">
// 						<FaCalendar />
// 						{duration}
// 					</div>
// 				</div>

// 				{!shift && (
// 					<div>
// 						<span className="qualification__rounder"></span>
// 						<span className="qualification__line"></span>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	)
// );
export const Qualification = () => {
	return (
		<Grid id="qualification" layerStyle="sectionStyle">
			<Heading fontSize={['1.5rem', '2rem']} textAlign="center">
				Qualification
			</Heading>
			<Text fontSize="xl" mb={[12, 16]} textAlign="center">
				My Journey
			</Text>
		</Grid>
	);
};
