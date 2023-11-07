import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import type { ResultData } from '../../@types';
import { Button, Flex, IncorrectNoteBox, ResultChart, Text } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { resetQuizAction } from '../../store';
import { base64Decode, isValidJSON } from '../../utils';

const ResultPage = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const resultData = isValidJSON(searchParams.get('res') as string) as ResultData;
	const incorrectCount = resultData.incorrectQuizData.length;
	const correctCount = resultData.quizCount - incorrectCount;

	const resetQuizAndMoveToReadyPage = () => {
		dispatch(resetQuizAction());
		navigate(ROUTER_PATH.READY);
	};

	const handleMoveToReadyPage = () => {
		resetQuizAndMoveToReadyPage();
	};

	if (!resultData) {
		resetQuizAndMoveToReadyPage();
		return null;
	}

	return (
		<Flex $direction="column" $alignItems="center" $height="100%" $gap={20}>
			<Flex $direction="column" $alignItems="center" $gap={8}>
				<Text $size="500" $weight="bold" tag="h2">
					🥳 모든 퀴즈를 풀었습니다 🎉
				</Text>
				<Flex $alignItems="center" $gap={8}>
					<Text $color="success" $colorLevel="500" $size="50">
						정답 {correctCount}개
					</Text>
					<Text $color="error" $colorLevel="500" $size="50">
						오답 {incorrectCount}개
					</Text>
					<Text $colorLevel="600" $size="50" $weight="medium">
						&nbsp; 총 소요 시간 {resultData.seconds}초
					</Text>
				</Flex>
			</Flex>
			<ResultChart correctCount={correctCount} incorrectCount={incorrectCount} />
			<Button $fullWidth onClick={handleMoveToReadyPage}>
				처음으로
			</Button>
			<Text $colorLevel="700" $size="200" $weight="medium" style={{ marginRight: 'auto' }}>
				오답 노트 📝
			</Text>
			<Flex $direction="column" $gap={8} style={{ flex: 1, overflow: 'auto' }}>
				{resultData?.incorrectQuizData.map(({ correct_answer, question }, index) => (
					<IncorrectNoteBox
						key={index}
						answer={base64Decode(correct_answer) || ''}
						question={base64Decode(question) || ''}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default ResultPage;
