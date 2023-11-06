import { Flex, Text } from '../..';
import * as S from './IncorrectNoteBox.styles';

export interface IncorrectNoteBoxProps {
	/** 오답이였던 퀴즈의 정답 */
	answer?: string;

	/** 오답이였던 퀴즈의 질문 */
	question?: string;
}

const IncorrectNoteBox = (props: IncorrectNoteBoxProps) => {
	const { answer, question } = props;

	return (
		<S.Wrapper role="alert">
			<Text $size="100" $weight="bold">
				{question}
			</Text>
			<Flex $gap={4} $alignItems="flex-end">
				<Text $size="75" $color="success" $colorLevel="500" $weight="medium">
					정답
				</Text>
				<Text $size="75">{answer}</Text>
			</Flex>
		</S.Wrapper>
	);
};

export default IncorrectNoteBox;
