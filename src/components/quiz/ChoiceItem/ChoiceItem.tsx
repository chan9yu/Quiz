import { Text } from '../..';
import type { ChildrenProps } from '../../../@types';
import * as S from './ChoiceItem.styled';

interface ChoiceItemProps extends ChildrenProps {
	/** 현재 문제가 정답인지 오답인지 구분하는 데이터 */
	answerStatus?: 'correct' | 'incorrect' | null;

	/** isCorrect가 true면 정답인 지문 */
	isCorrect?: boolean;

	/** ChoiceItem 컴포넌트 클릭 이벤트 */
	onClick?: () => void;

	/** 몇 번 지문인지 UI에 노출하기 위해 필요한 데이터 */
	prefixNumber?: number;

	/** selected가 true면 내가 선택한 지문 */
	selected?: boolean;
}

const ChoiceItem = (props: ChoiceItemProps) => {
	const { answerStatus = null, children, isCorrect = false, onClick, prefixNumber, selected = false } = props;

	return (
		<S.Wrapper $answerStatus={answerStatus} $isCorrect={isCorrect} $selected={selected} onClick={onClick}>
			<S.PrefixItem>{prefixNumber}</S.PrefixItem>
			<Text $size="200" $weight="bold" style={{ flex: 1 }}>
				{children}
			</Text>
		</S.Wrapper>
	);
};

export default ChoiceItem;
