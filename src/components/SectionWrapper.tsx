import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface SectionProps {
	children: ReactNode;
}
export const SectionWrapper = ({ children }: SectionProps) => {
	return <Box layerStyle="wrapper">{children}</Box>;
};
