import { ReactNode } from 'react';
import * as S from './Modal.styled';

interface ModalProps {
	children?: ReactNode;
}

const Modal = (props: ModalProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default Modal;
