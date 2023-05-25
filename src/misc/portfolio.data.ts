import moviewWatch from '../assets/projects/screenshots/movie-desk.png';
import movieMob from '../assets/projects/screenshots/movie-mob.png';
import colorGenDesktop from '../assets/projects/screenshots/color-gen-desktop.png';
import colorGenMobile from '../assets/projects/screenshots/color-gen-mobile.png';
import tenziesGameDesktop from '../assets/projects/screenshots/tenzies-desk.png';
import tenziesMobile from '../assets/projects/screenshots/tenzies-mob.png';
import markdownDesktop from '../assets/projects/screenshots/markdown-desk.png';
import markdownMobile from '../assets/projects/screenshots/markdown-mob.png';
import dictionaryDesk from '../assets/projects/screenshots/dictionary-desk.png';
import dictionaryMob from '../assets/projects/screenshots/dictionary-mob.png';

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
		title: 'Dictionary',
		desc: 'A Dictionary web app built using the Open dictionary API.',
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
