import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
	display: 'inline-flex',
	textDecoration: 'none',
	color: 'white',
	fontWeight: 'bold',
	bg: 'brand.linear',
	borderRadius: '0.5rem',
	padding: '1rem',
	columnGap: '.3rem',
	_hover: { textDecoration: 'none', bgColor: 'brand.primary' },
	alignItems: 'center',
	boxShadow: 'lg',
	// let's also provide dark mode alternatives
	// _dark: {
	// 	color: 'orange.800',
	// },
});

export const linkTheme = defineStyleConfig({
	variants: { brandPrimary },
});
