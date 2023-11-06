import type { QuizListResponse, QuizRequestParams } from '../../@types';

// sync action type
export const RESET_QUIZ = 'RESET_QUIZ' as const;

export const resetQuizAction = () => ({
	type: RESET_QUIZ
});

// async action type
export const GET_QUIZ_REQUEST = 'GET_QUIZ_REQUEST' as const;
export const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS' as const;
export const GET_QUIZ_FAILURE = 'GET_QUIZ_FAILURE' as const;

export const getQuizRequestAction = (data: QuizRequestParams) => ({
	type: GET_QUIZ_REQUEST,
	data
});

export const getQuizSuccessAction = (data: QuizListResponse) => ({
	type: GET_QUIZ_SUCCESS,
	data
});

export const getQuizFailureAction = (error: string) => ({
	type: GET_QUIZ_FAILURE,
	error
});

export type QuizActionTypes =
	| ReturnType<typeof resetQuizAction>
	| ReturnType<typeof getQuizRequestAction>
	| ReturnType<typeof getQuizSuccessAction>
	| ReturnType<typeof getQuizFailureAction>;
