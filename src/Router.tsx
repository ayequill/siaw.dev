import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home';
import Contact from './components/ContactForm';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { Skills } from './components/Skills';
import Project from './components/Project';
import { Qualification } from './components/Qualification';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
	{ path: '/', Component: Home, errorElement: <ErrorPage /> },
	{ path: 'contact', Component: Contact },
	{ path: 'about', Component: About },
	{ path: 'skills', Component: Skills },
	{ path: 'projects', Component: Project },
	{ path: 'qualifications', Component: Qualification },
	{ path: 'portfolio', Component: Portfolio },
]);
const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
