import moviewWatch from '../assets/projects/screenshots/movie-desk.webp';
import movieMob from '../assets/projects/screenshots/movie-mob.png';
import colorGenDesktop from '../assets/projects/screenshots/color-gen-desktop.png';
import colorGenMobile from '../assets/projects/screenshots/color-gen-mobile.png';
import tenziesGameDesktop from '../assets/projects/screenshots/tenzies-desk.png';
import tenziesMobile from '../assets/projects/screenshots/tenzies-mob.webp';
import markdownDesktop from '../assets/projects/screenshots/markdown-desk.png';
import markdownMobile from '../assets/projects/screenshots/markdown-mob.webp';
import dictionaryDesk from '../assets/projects/screenshots/dictionary-desk.png';
import dictionaryMob from '../assets/projects/screenshots/dictionary-mob.webp';
import booleBotDesktop from '../assets/projects/screenshots/boolebot-desktop.webp';
import booleBotMob from '../assets/projects/screenshots/boolebot-mob.webp';
import ipTrackerDesk from '../assets/projects/screenshots/ip-adress-tracker-desk.webp';
import ipTrackerMob from '../assets/projects/screenshots/ip-adress-tracker-mobile.webp';
import movieLibdesk from '../assets/projects/screenshots/movie-library-desktop.webp';
import movieLibMob from '../assets/projects/screenshots/movie-library-mob.webp';

interface PortfolioItem {
	title: string;
	desc: string;
	demoUrl: string;
	repoUrl: string;
	desktopImgSrc: string;
	mobileImgSrc: string;
	tags: string[];
}

export const portfolioData: PortfolioItem[] = [
	{
		title: 'Boole Bots ',
		desc: 'Boolebots aims to make learning boolean logic fun and engaging by allowing players to configure a series of bots and pit them against each other in battles. The outcome of each battle is determined by the principles of boolean logic, an essential concept in computer science and programming. By observing and analyzing the results, players can develop a deeper understanding of how boolean logic operates. Developed with my team at Chingu.',
		demoUrl: 'https://boolebots.siaw.dev',
		repoUrl: 'https://github.com/chingu-voyages/v44-tier2-team-27',
		desktopImgSrc: booleBotDesktop,
		mobileImgSrc: booleBotMob,
		tags: ['react-ts', 'css', 'typescript'],
	},
	{
		title: 'IP Address Tracker',
		desc: 'This is a web application built using React and TypeScript that allows users to track the geographical location of an IP address. It utilizes the Leaflet library for interactive maps and makes API calls to IPify for retrieving IP address data.',
		demoUrl: 'https://iptracker.siaw.dev',
		repoUrl: 'https://github.com/ayequill/Ip-adress-tracker-with-react',
		desktopImgSrc: ipTrackerDesk,
		mobileImgSrc: ipTrackerMob,
		tags: ['react-js', 'chakra-ui', 'leaflet-js', 'ipify'],
	},
	{
		title: 'Movie Library WebApp',
		desc: 'A movie collection Website adaptable to all devices, developed with TheMovieDB API.',
		demoUrl: 'https://movielibrary.siaw.dev',
		repoUrl: 'https://github.com/ayequill/movie-library',
		desktopImgSrc: movieLibdesk,
		mobileImgSrc: movieLibMob,
		tags: ['react-js', 'chakra-ui', 'api'],
	},
	{
		title: 'Dictionary WebApp',
		desc: 'This is a simple dictionary webapp developed with React and Chakra UI. Users can search for words and get their definitions and synonyms.',
		demoUrl: 'https://dic.siaw.dev',
		repoUrl: 'https://github.com/ayequill/dictionary',
		desktopImgSrc: dictionaryDesk,
		mobileImgSrc: dictionaryMob,
		tags: ['react-js', 'chakra-ui', 'api'],
	},
	{
		title: 'Movie Watchlist WebApp',
		desc: 'A movie collection Website adaptable to all devices, developed with TheMovieDB API.',
		demoUrl: 'https://movie-watchlist-beta.vercel.app',
		repoUrl: 'https://github.com/ayequill/movie-watchlist',
		desktopImgSrc: moviewWatch,
		mobileImgSrc: movieMob,
		tags: ['html', 'scss', 'vanilla-js', 'api'],
	},
	{
		title: 'Color Scheme Generator',
		desc: 'A Color Scheme WepApp.',
		demoUrl: 'https://ayequill-color-gen.vercel.app',
		repoUrl: 'https://github.com/ayequill/color-generator',
		desktopImgSrc: colorGenDesktop,
		mobileImgSrc: colorGenMobile,
		tags: ['html', 'scss', 'vanilla-js', 'api'],
	},
	{
		title: 'Markdown Notes App',
		desc: 'A markdown notes app with preview. You can write HTML directly and preview.',
		demoUrl: 'https://notes.siaw.dev',
		repoUrl: 'https://github.com/ayequill/markdown-editor-notes-app',
		desktopImgSrc: markdownDesktop,
		mobileImgSrc: markdownMobile,
		tags: ['html', 'scss', 'react-js', 'api'],
	},
	{
		title: 'Tenzies!',
		desc: 'A Tenzies game.',
		demoUrl: 'https://tenzies.siaw.dev',
		repoUrl: 'https://github.com/ayequill/tenzies-game',
		desktopImgSrc: tenziesGameDesktop,
		mobileImgSrc: tenziesMobile,
		tags: ['html', 'scss', 'react-js'],
	},
];
