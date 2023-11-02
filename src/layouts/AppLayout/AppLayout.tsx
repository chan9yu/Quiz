import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';

const AppLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === ROUTER_PATH.ROOT) navigate(ROUTER_PATH.READY);
	}, [navigate, pathname]);

	return (
		<div>
			<h1>Quiz App</h1>
			<h4>quiz app with react</h4>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<Link to={ROUTER_PATH.READY}>Ready</Link>
				<Link to={ROUTER_PATH.QUIZ}>Quiz</Link>
				<Link to={ROUTER_PATH.RESULT}>Result</Link>
				<Link to={'/dddddddd'}>Not Found</Link>
			</div>
			<Outlet />
			<footer>footer</footer>
		</div>
	);
};

export default AppLayout;
