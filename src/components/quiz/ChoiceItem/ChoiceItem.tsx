import { ReactNode } from 'react';
import * as S from './ChoiceItem.styled';

interface ChoiceItemProps {
	children?: ReactNode;
}

const ChoiceItem = (props: ChoiceItemProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default ChoiceItem;
