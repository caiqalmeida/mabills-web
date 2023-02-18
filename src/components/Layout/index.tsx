import React, { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode | ReactNode[];
}

const Layout = (props: LayoutProps) => {
	return <div>{props.children}</div>;
};

export default Layout;
