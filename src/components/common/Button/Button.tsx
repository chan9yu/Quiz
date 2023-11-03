import { ReactNode } from 'react';
import * as S from './Button.styles';

interface ButtonProps {
	children?: ReactNode;
}

const Button = (props: ButtonProps) => {
	const { children } = props;

	return <S.ButtonStyled>{children}</S.ButtonStyled>;
};

export default Button;
