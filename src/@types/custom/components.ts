import { CSSProperties, ReactNode } from 'react';

export type CommonProps = {
	className?: string;
	style?: CSSProperties;
};

export type ChildrenProps = {
	children?: ReactNode;
};

export type CommonPropsWithChuldren = CommonProps & ChildrenProps;
