import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import type { GetCategoryResponse, SearchTokenResponse } from './@types';
import { categoryAPIs, quizAPIs, tokenAPIs } from './apis';
import { GlobalStyle } from './styles';
import { RootState, getQuizRequestAction } from './store';

const App = () => {
	const dispatch = useDispatch();
	const { quiz } = useSelector((state: RootState) => state.quiz);
	console.log('### quiz', quiz);

	const [tokenData, setTokenData] = useState<SearchTokenResponse | null>(null);
	const [categoryData, setCategoryData] = useState<GetCategoryResponse | null>(null);

	const handleSearchToken = async () => {
		const { data } = await tokenAPIs.searchToken();
		console.log('### handleSearchToken', data);
		setTokenData(data);
	};

	const handleResetToken = async () => {
		if (!tokenData) return;
		const { data } = await tokenAPIs.resetToken({ token: tokenData.token });
		console.log('### handleResetToken', data);
		setTokenData(data);
	};

	const handleGetCategory = async () => {
		const { data } = await categoryAPIs.getCategory();
		console.log('### handleGetCategory', data);
		setCategoryData(data);
	};

	const handleGetQuiz = async () => {
		dispatch(
			getQuizRequestAction({
				amount: 10,
				type: 'multiple'
			})
		);
	};

	return (
		<>
			<GlobalStyle />
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<div style={{ display: 'flex', gap: '12px' }}>
					<button onClick={handleSearchToken}>searchToken</button>
					<button onClick={handleResetToken}>resetToken</button>
				</div>
				<div style={{ display: 'flex', gap: '12px' }}>
					<button onClick={handleGetCategory}>getCategory</button>
				</div>
				<div style={{ display: 'flex', gap: '12px' }}>
					<button onClick={handleGetQuiz}>getQuiz</button>
				</div>
			</div>
		</>
	);
};

export default App;
