import { ReactNode } from 'react';
import * as S from './Flex.styled';

interface FlexProps {
	children?: ReactNode;
}

const Flex = (props: FlexProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default Flex;
