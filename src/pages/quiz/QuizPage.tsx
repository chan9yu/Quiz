import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { IncorrectQuizData, QuizData, ResultData } from '../../@types';
import { Button, ChoiceItem, Flex, ProgressBar, Text } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { RootState, resetQuizAction } from '../../store';
import { base64Decode, shuffleArray } from '../../utils';

const QuizPage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { quiz } = useSelector((state: RootState) => state.quiz);

	const timeoutId = useRef<NodeJS.Timeout>();
	const [seconds, setSeconds] = useState(0);

	const [quizStep, setQuizStep] = useState(0);
	const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
	const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number | null>(null);
	const [incorrectList, setIncorrectList] = useState<QuizData[]>([]);

	const isLastQuiz = quiz && quizStep + 1 === quiz.length;
	const currentQuizData = (quiz && quiz[quizStep]) as QuizData;
	const answerList = useMemo(
		() => currentQuizData && shuffleArray([currentQuizData.correct_answer, ...currentQuizData.incorrect_answers]),
		[currentQuizData]
	);

	const handleChoiceItem = (itemIndex: number) => () => {
		setSelectedChoiceIndex(itemIndex);
		if (answerList[itemIndex] === currentQuizData.correct_answer) {
			// 선택한 지문이 정답인 경우
			setAnswerStatus('correct');
		} else {
			// 선택한 지문이 오답인 경우
			setAnswerStatus('incorrect');
			setIncorrectList(prev => [...prev, currentQuizData]);
		}
	};

	const handleNextStep = () => {
		if (isLastQuiz) {
			// 모든 문제를 풀었을 경우
			const incorrectQuizData: IncorrectQuizData[] = incorrectList.map(({ correct_answer, question }) => ({
				correct_answer,
				question
			}));
			const resultData: ResultData = {
				incorrectQuizData,
				quizCount: quiz.length,
				seconds: String(seconds)
			};
			const encodedIncorrectQuizData = encodeURIComponent(JSON.stringify(resultData));
			navigate({
				pathname: ROUTER_PATH.RESULT,
				search: `?res=${encodedIncorrectQuizData}`
			});
		} else {
			// 다음 문제가 있을 경우
			setQuizStep(prev => prev + 1);
			setAnswerStatus(null);
		}
	};

	const handleResetQuiz = () => {
		if (confirm('정말로 나가시겠습니까?')) {
			dispatch(resetQuizAction());
		}
	};

	useEffect(() => {
		timeoutId.current = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		return () => {
			clearInterval(timeoutId.current);
		};
	}, []);

	useEffect(() => {
		// 새로고침 시도 시 경고문
		const preventClose = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue = '';
		};

		window.addEventListener('beforeunload', preventClose);

		return () => {
			window.removeEventListener('beforeunload', preventClose);
		};
	}, []);

	useEffect(() => {
		// quiz 데이터가 없으면 프로세스 처음부터 시작
		if (!quiz) {
			navigate(ROUTER_PATH.READY);
		}
	}, [navigate, quiz]);

	if (!quiz) return null;

	return (
		<Flex $direction="column" $height="100%" $gap={20}>
			<Flex $fullWidth $justifyContent="space-between" $alignItems="end">
				<Text $size="600" $weight="bold" tag="h2">
					Question {quizStep + 1}
				</Text>
				<Text $colorLevel="600" $size="75">
					⏰ {seconds}초
				</Text>
			</Flex>
			<Flex $alignItems="center" $gap={12} $fullWidth>
				<ProgressBar percent={((quizStep + 1) / quiz.length) * 100} />
				<Text $color="gray" $colorLevel="500" $weight="bold">{`${quizStep + 1}/${quiz.length}`}</Text>
			</Flex>
			<Text $size="400" $weight="medium" style={{ height: '100px' }}>
				{base64Decode(currentQuizData.question)}
			</Text>
			<Flex $height={50}>
				{answerStatus === 'correct' && (
					<Text $color="success" $colorLevel="500">
						정답입니다 😆
					</Text>
				)}
				{answerStatus === 'incorrect' && (
					<Flex $direction="column" $gap={8}>
						<Text $color="error" $colorLevel="500">
							오답입니다 😥
						</Text>
						<Text>정답은 {base64Decode(currentQuizData.correct_answer)} 입니다</Text>
					</Flex>
				)}
			</Flex>
			<Flex $direction="column" $flexGrow={1} $fullWidth $gap={20} $justifyContent="center">
				{answerList?.map((answer, index) => (
					<ChoiceItem
						key={answer}
						answerStatus={answerStatus}
						prefixNumber={index + 1}
						onClick={handleChoiceItem(index)}
						isCorrect={currentQuizData?.correct_answer === answer}
						selected={selectedChoiceIndex === index}
					>
						{base64Decode(answer)}
					</ChoiceItem>
				))}
			</Flex>
			<Flex
				$direction="column"
				$fullWidth
				$justifyContent="flex-end"
				$gap={12}
				style={{
					minHeight: '108px',
					...(window.innerWidth < 480 && {
						paddingBottom: '12px'
					})
				}}
			>
				{answerStatus && (
					<Button $fullWidth disabled={!answerStatus} onClick={handleNextStep}>
						{isLastQuiz ? '결과 보기' : '다음 문항'}
					</Button>
				)}
				<Button $color="gray" $fullWidth onClick={handleResetQuiz}>
					나가기
				</Button>
			</Flex>
		</Flex>
	);
};

export default QuizPage;
