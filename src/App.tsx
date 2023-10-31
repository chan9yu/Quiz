import { useState } from 'react';

import type { GetCategoryResponse, SearchTokenResponse } from './@types';
import { categoryAPIs, quizAPIs, tokenAPIs } from './apis';

const App = () => {
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
		const { data } = await quizAPIs.getQuiz({
			amount: 10,
			category: categoryData?.trivia_categories[2].id,
			difficulty: 'easy',
			encode: 'base64',
			type: 'multiple',
			token: tokenData?.token
		});
		console.log('### handleGetQuiz', data);
	};

	return (
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
	);
};

export default App;
