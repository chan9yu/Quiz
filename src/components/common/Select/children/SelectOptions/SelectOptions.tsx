import type { CommonPropsWithChildren } from '../../../../../@types';
import { useSelectContext } from '../../context';
import * as S from './SelectOptions.styles';

interface SelectOptionsProps extends CommonPropsWithChildren {}

const SelectOptions = (props: SelectOptionsProps) => {
	const { children, ...rest } = props;

	const { isOpen } = useSelectContext();

	if (!isOpen) return null;

	return <S.SelectOptionsStyled {...rest}>{children}</S.SelectOptionsStyled>;
};

export default SelectOptions;
