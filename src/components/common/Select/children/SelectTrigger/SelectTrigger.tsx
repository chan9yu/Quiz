import { Flex, Text } from '../../..';
import { useSelectContext } from '../../context';
import * as S from './SelectTrigger.styles';

interface SelectTriggerProps {
	selectLabel?: string;
}

const SelectTrigger = (props: SelectTriggerProps) => {
	const { selectLabel } = props;

	const { setIsOpen, selectData } = useSelectContext();

	const handleToggleSelectOpen = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<Flex $direction="column" $gap={8}>
			{selectLabel && <Text $size="50">{selectLabel}</Text>}
			<S.SelectTriggerStyled onClick={handleToggleSelectOpen}>{selectData?.label}</S.SelectTriggerStyled>
		</Flex>
	);
};

export default SelectTrigger;
