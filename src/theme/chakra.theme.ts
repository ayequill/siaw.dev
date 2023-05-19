import { extendTheme } from '@chakra-ui/react';
import '@fontsource/sen';
import { linkTheme } from './button.custom';

const hue = 150;
export const theme = extendTheme({
	fonts: {
		body: 'Sen, sans-serif',
	},
	colors: {
		brand: {
			primary: `hsl(${hue}, 69%, 61%)`,
			secondary: `hsl(${hue}, 57%, 53%)`,
			text: `hsl(${hue}, 8%, 45%)`,
			textSecondary: `hsl(${hue}, 8%, 65%)`,
			bodyColor: `hsl(${hue}, 60%, 99%)`,
			bodyColorDark: `hsl(${hue}, 28%, 12%)`,
			linear: `linear-gradient(90deg, hsla(${hue}, 57%, 40%, 1) 40%, hsla(${hue}, 69%, 61%, 1) 100%)`,
			primaryDark: `hsla(${hue}, 57%, 40%)`,
		},
	},
	global: {
		body: {
			position: 'relative',
		},
		li: {
			listStyle: 'none',
		},
	},
	layerStyles: {
		navLinkStyles: {
			alignItems: 'center',
			display: 'flex',
			flexDir: 'column',
		},
		sectionStyles: {
			padding: { base: '2rem 0 4rem', md: '6rem 0 2rem', lg: '3rem 6rem' },
			marginBottom: { md: '3rem' },
			minH: { lg: '80vmin' },
		},
		wrapper: {
			// marginX: { base: '1.5rem', md: 'auto' },
			// mr: '1.5rem',
			maxW: { base: '30em', md: '48em', lg: '62em', xl: '80em' },
			w: '100%',
			px: { base: '1rem', lg: '0.5rem' },
		},
	},
	components: {
		Link: linkTheme,
	},
	styles: {
		global: (props: { colorMode: string }) => ({
			'html, body': {
				fontSize: 'sm',
				color: props.colorMode === 'dark' ? 'white' : 'gray.600',
				lineHeight: 'tall',
				bg: props.colorMode === 'dark' ? 'black' : `hsl(${hue}, 60%, 99%)`,
			},
			a: {
				color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
			},
		}),
	},
});
