import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface SectionProps {
	children: ReactNode;
}
export const SectionWrapper = ({ children }: SectionProps) => {
	return (
		<Box
			as="section"
			p={{ base: '2rem 0 4rem' }}
			// maxW={['767px', '1024px', '1400px']}
		>
			{children}
		</Box>
	);
};
