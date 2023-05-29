export const data: {
	education: {
		duration: string;
		shift: boolean;
		institute: string;
		id: number;
		title: string;
	}[];
	work: {
		duration: string;
		shift: boolean;
		institute: string;
		id: number;
		title: string;
	}[];
} = {
	education: [
		{
			duration: '2015 - 2019',
			id: 1,
			institute: 'DataLink University, Tema',
			shift: false,
			title: 'Computer Science',
		},
		{
			id: 2,
			title: 'Frontend Developer Career Path',
			institute: 'Scrimba',
			duration: '2022 - 2023',
			shift: true,
		},
		{
			id: 3,
			title: 'ALX Software Engineering',
			institute: 'ALX',
			duration: '2023 - 2024',
			shift: false,
		},
	],

	work: [
		{
			id: 1,
			title: 'Network Technician',
			institute: 'Hardric Engineering, Accra',
			duration: '2017 - 2018',
			shift: true,
		},
		{
			id: 2,
			title: 'Network Technician',
			institute: 'ComNet SA LTD, Accra',
			duration: '2018 - Present',
			shift: false,
		},
		{
			id: 3,
			title: 'Freelance',
			institute: 'Delawin Farms',
			duration: '2019 - 2020',
			shift: true,
		},
	],
};
