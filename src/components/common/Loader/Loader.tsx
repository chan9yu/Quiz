import { ReactNode } from 'react';
import * as S from './Loader.styled';

interface LoaderProps {
	children?: ReactNode;
}

const Loader = (props: LoaderProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default Loader;
