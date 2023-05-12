import { extendTheme } from '@chakra-ui/react';
import '@fontsource/sen';

const hue = 250;
export const theme = extendTheme({
	fonts: {
		body: 'Sen, sans-serif',
	},
	colors: {
		brand: {
			primary: `hsl(${hue}, 69%, 61%)`,
			secondary: `hsl(${hue}, 69%, 61%)`,
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
	},
});
