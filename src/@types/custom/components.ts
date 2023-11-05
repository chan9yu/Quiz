import { CSSProperties, ReactNode } from 'react';

export type CommonProps = {
	className?: string;
	style?: CSSProperties;
};

export type ChildrenProps = {
	children?: ReactNode;
};

export type CommonPropsWithChildren = CommonProps & ChildrenProps;

/** Select 컴포넌트 데이터 타입 */
export type SelectData = {
	value: string;
	label?: string;
};
