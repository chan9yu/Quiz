import { ReactNode } from 'react';
import * as S from './Text.styled';

interface TextProps {
	children?: ReactNode;
}

const Text = (props: TextProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default Text;
