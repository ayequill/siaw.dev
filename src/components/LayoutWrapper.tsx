import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
	children: ReactNode;
}
export const LayoutWrapper = ({ children }: LayoutProps) => {
	return (
		<Box
			margin="0 auto"
			// maxW={['767px', '1024px', '1400px']}
		>
			{children}
		</Box>
	);
};
