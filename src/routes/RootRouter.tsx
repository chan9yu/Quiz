import { Suspense } from 'react';
import { RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';

import { ROUTER_PATH } from '../constants';
import { AppLayout } from '../layouts';
import * as P from '../pages';

const appObject: RouteObject[] = [
	{
		path: ROUTER_PATH.READY,
		element: <P.ReadyLazyPage />
	},
	{
		path: ROUTER_PATH.QUIZ,
		element: <P.QuizLazyPage />
	},
	{
		path: ROUTER_PATH.RESULT,
		element: <P.ResultLazyPage />
	}
];

const routeObject: RouteObject[] = [
	{
		path: ROUTER_PATH.ROOT,
		element: <AppLayout />,
		children: appObject,
		errorElement: <P.ErrorPage />
	}
];

const Router = () => (
	<Suspense fallback={<span>Loading...</span>}>
		<RouterProvider router={createHashRouter(routeObject)} />
	</Suspense>
);

export default Router;
