import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Box,
	Link,
} from '@chakra-ui/react';

export default function ErrorPage() {
	return (
		<Box display="flex" justifyContent="center" m="40vh auto">
			<Alert status="error" maxW="300px">
				<AlertIcon />
				<AlertTitle>
					Please Go back <Link href="/">Home</Link>
				</AlertTitle>
				<AlertDescription>Error: Not Found.</AlertDescription>
			</Alert>
		</Box>
	);
}
