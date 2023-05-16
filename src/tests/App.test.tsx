import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
	it('renders the NavigationBar and Home components', () => {
		render(<App />);
		expect(screen.getByText('siaw.dev')).toBeInTheDocument();
		expect(screen.getByRole('banner')).toBeInTheDocument();
		// expect(screen.getByRole('main')).toBeInTheDocument();
		expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
	});
});
