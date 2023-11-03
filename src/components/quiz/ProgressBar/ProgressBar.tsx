import { ReactNode } from 'react';
import * as S from './ProgressBar.styled';

interface ProgressBarProps {
	children?: ReactNode;
}

const ProgressBar = (props: ProgressBarProps) => {
	const { children } = props;

	return <S.Wrapper>{children}</S.Wrapper>;
};

export default ProgressBar;
