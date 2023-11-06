import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import type { QuizData } from '../../@types';
import { Button, Flex, IncorrectNoteBox, Text } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { resetQuizAction } from '../../store';
import { base64Decode } from '../../utils';

const isValidJSON = (string: string) => {
	try {
		return JSON.parse(string);
	} catch {
		return false;
	}
};

const ResultPage = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const incorrectList = isValidJSON(searchParams.get('res') as string) as QuizData[];

	const resetQuizAndMoveToReadyPage = () => {
		dispatch(resetQuizAction());
		navigate(ROUTER_PATH.READY);
	};

	const handleMoveToReadyPage = () => {
		resetQuizAndMoveToReadyPage();
	};

	if (!incorrectList) {
		resetQuizAndMoveToReadyPage();
		return null;
	}

	return (
		<Flex $direction="column" $alignItems="center" $gap={16}>
			<Text $size="600" $weight="bold" tag="h2">
				모든 퀴즈를 풀었습니다 🎉
			</Text>
			<Button $fullWidth onClick={handleMoveToReadyPage}>
				처음으로
			</Button>
			<Flex $direction="column" $gap={8}>
				<Text $colorLevel="700" $size="200" $weight="medium">
					오답 노트
				</Text>
				{incorrectList?.map(({ correct_answer, question }, index) => (
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
