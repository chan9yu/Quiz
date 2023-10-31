import { AxiosPromise } from 'axios';

import type { QuizListResponse, QuizRequestParams } from '../@types';
import { API_PATH, HTTP_METHOD } from '../constants';
import { createInstance } from './base';

const quizInstance = createInstance(API_PATH.QUIZ);

export const quizAPIs = {
	/** 퀴즈 리스트 조회 API */
	getQuiz: (params: QuizRequestParams): AxiosPromise<QuizListResponse> =>
		quizInstance({
			method: HTTP_METHOD.GET,
			params: {
				...params
			}
		})
};
