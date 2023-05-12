import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
	children: ReactNode;
}
export const LayoutWrapper = ({ children }: LayoutProps) => {
	return (
		<Box ml="1.5rem" mr="1.5rem" maxW="767px">
			{children}
		</Box>
	);
};
