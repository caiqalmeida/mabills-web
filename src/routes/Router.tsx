import React, { lazy, ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import PageLoading from "components/PageLoading";
import Layout from "components/Layout";

import paths from "./paths";

const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));

interface Routes {
	path: string;
	element: ReactNode;
}

const getRouteElement = (Component: React.ElementType): ReactNode => (
	<Suspense fallback={<PageLoading />}>
		<Layout>
			<Component />
		</Layout>
	</Suspense>
);

const routes: Routes[] = [
	{ path: paths.HOME, element: getRouteElement(Home) },
	{
		path: paths.NOT_FOUND,
		element: getRouteElement(NotFound),
	},
];

export default createBrowserRouter(routes);
