import { produce } from 'immer';

import type { QuizState } from '../../@types';
import * as actions from './quizActions';

const initialState: QuizState = {
	getQuizLoading: false,
	getQuizSuccess: false,
	getQuizError: null,
	quiz: null
};

export const quizReducer = (state = initialState, action: actions.QuizActionTypes) =>
	produce(state, draft => {
		switch (action.type) {
			case actions.RESET_QUIZ:
				draft.getQuizLoading = false;
				draft.getQuizSuccess = false;
				draft.getQuizError = null;
				draft.quiz = null;
				break;
			case actions.GET_QUIZ_REQUEST:
				draft.getQuizLoading = true;
				draft.getQuizSuccess = false;
				draft.getQuizError = null;
				break;
			case actions.GET_QUIZ_SUCCESS:
				draft.getQuizLoading = false;
				draft.getQuizSuccess = true;
				draft.quiz = action.data.results;
				break;
			case actions.GET_QUIZ_FAILURE:
				draft.getQuizLoading = false;
				draft.getQuizError = action.error;
				break;
			default:
				break;
		}
	});
