import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavigationBar from '../components/NavigationBar';

describe('NavigationBar', () => {
	test('renders navigation links', () => {
		render(<NavigationBar />);
		const homeLink = screen.getByText(/home/i);
		const aboutLink = screen.getByText(/about/i);
		const skillsLink = screen.getByText(/skills/i);
		const servicesLink = screen.getByText(/services/i);
		const portfolioLink = screen.getByText(/portfolio/i);
		const contactLink = screen.getByText(/contact/i);
		expect(homeLink).toBeInTheDocument();
		expect(aboutLink).toBeInTheDocument();
		expect(skillsLink).toBeInTheDocument();
		expect(servicesLink).toBeInTheDocument();
		expect(portfolioLink).toBeInTheDocument();
		expect(contactLink).toBeInTheDocument();
	});

	test('opens and closes menu', () => {
		render(<NavigationBar />);
		const menuToggle = screen.getByLabelText(/toggle menu/i);
		void userEvent.click(menuToggle);
		expect(screen.getByRole('menu')).toBeInTheDocument();
		// void userEvent.click(menuToggle);
		// expect(screen.getByRole('')).toBeInTheDocument();
	});
});
