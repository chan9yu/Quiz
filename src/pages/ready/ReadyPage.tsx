import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import type { QuizRequestParams, SelectData } from '../../@types';
import { Button, Flex, Select, Text } from '../../components';
import { RootState, getCategoryRequestAction, getQuizRequestAction } from '../../store';

const ReadyPage = () => {
	const dispatch = useDispatch();
	const { category: categoryState, quiz: quizState } = useSelector((state: RootState) => state);

	const [amountData, setAmountData] = useState<SelectData>({ value: '5', label: '5문제' });
	const [categoryData, setCategoryData] = useState<SelectData>({ value: '9', label: 'General Knowledge' });
	const [difficultyData, setDifficultyData] = useState<SelectData>({ value: 'easy', label: '쉬움' });

	const onChangeAmount = (data: SelectData) => setAmountData(data);
	const onChangeCategoryId = (data: SelectData) => setCategoryData(data);
	const onChangeDifficulty = (data: SelectData) => setDifficultyData(data);

	const handleStartQuiz = async () => {
		const quizRequestParams: QuizRequestParams = {
			amount: Number(amountData.value),
			category: Number(categoryData.value),
			difficulty: difficultyData.value as 'easy' | 'medium' | 'hard',
			// encode: 'base64',
			// token,
			type: 'multiple'
		};

		dispatch(getQuizRequestAction(quizRequestParams));
	};

	useEffect(() => {
		dispatch(getCategoryRequestAction());
	}, [dispatch]);

	return (
		<Flex $direction="column" $fullWidth $alignItems="center" $height="100%" $justifyContent="center" $gap={20}>
			<Text tag="h1" $size="800" $weight="bold">
				🧩 Quiz App
			</Text>
			<Flex $alignItems="center" $fullWidth $direction="column" $flexGrow={1} $gap={20} $justifyContent="center">
				{/* amount select */}
				<Select selectData={amountData} onChange={onChangeAmount}>
					<Select.Trigger selectLabel="질문 수를 선택해주세요! (최대 10문제)" />
					<Select.Options>
						<Select.Option value="5" label="5문제" />
						<Select.Option value="6" label="6문제" />
						<Select.Option value="7" label="7문제" />
						<Select.Option value="8" label="8문제" />
						<Select.Option value="9" label="9문제" />
						<Select.Option value="10" label="10문제" />
					</Select.Options>
				</Select>
				{/* category select */}
				<Select selectData={categoryData} onChange={onChangeCategoryId}>
					<Select.Trigger selectLabel="카테고리를 선택해주세요." />
					<Select.Options>
						{categoryState.categories.map(({ id, name }) => (
							<Select.Option key={id} value={String(id)} label={name} />
						))}
					</Select.Options>
				</Select>
				{/* difficulty select */}
				<Select selectData={difficultyData} onChange={onChangeDifficulty}>
					<Select.Trigger selectLabel="문제 난이도를 선택해주세요." />
					<Select.Options>
						<Select.Option value="easy" label="쉬움" />
						<Select.Option value="medium" label="보통" />
						<Select.Option value="hard" label="어려움" />
					</Select.Options>
				</Select>
			</Flex>
			<Button $fullWidth $loading={quizState.getQuizLoading} $size="lg" onClick={handleStartQuiz}>
				퀴즈 풀기
			</Button>
		</Flex>
	);
};

export default ReadyPage;
