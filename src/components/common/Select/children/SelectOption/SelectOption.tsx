import type { CommonProps } from '../../../../../@types';
import { useSelectContext } from '../../context';
import * as S from './SelectOption.styles';

interface SelectOptionProps extends CommonProps {
	label?: string;
	value?: string;
}

const SelectOption = (props: SelectOptionProps) => {
	const { className, label, style, value } = props;

	const { setIsOpen, onChange, selectData } = useSelectContext();

	const handleSelectItem = () => {
		onChange && value && onChange({ label, value });
		setIsOpen(false);
	};

	return (
		<S.SelectOptionStyled
			$active={selectData?.value === value}
			className={className}
			style={style}
			onClick={handleSelectItem}
		>
			{label}
		</S.SelectOptionStyled>
	);
};

export default SelectOption;
