import { LinkProps, Link } from '@chakra-ui/react';
import { ReactElement } from 'react';

type CustomButtonProps = LinkProps & {
	label: string;
	icon?: ReactElement;
	link?: string;
};

function CustomButton({ label, icon, link }: CustomButtonProps) {
	return (
		<Link aria-label={label}>
			{link}
			{icon}
		</Link>
	);
}

export default CustomButton;
