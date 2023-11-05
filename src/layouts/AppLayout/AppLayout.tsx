import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../constants';
import * as S from './AppLayout.styles';

const AppLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === ROUTER_PATH.ROOT) navigate(ROUTER_PATH.READY);
	}, [navigate, pathname]);

	return (
		<S.Wrapper>
			<Outlet />
		</S.Wrapper>
	);
};

export default AppLayout;
