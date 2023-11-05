import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { QuizRequestParams } from '../../@types';
import { quizAPIs } from '../../apis';
import * as actions from './quizActions';

function* getQuiz(action: actions.QuizActionTypes) {
	try {
		const { data } = yield call(quizAPIs.getQuiz, (action as { data: QuizRequestParams }).data);
		yield put(actions.getQuizSuccessAction(data));
	} catch (error) {
		yield put(actions.getQuizFailureAction(error as unknown as string));
	}
}

function* watchGetQuiz() {
	yield takeLatest(actions.GET_QUIZ_REQUEST, getQuiz);
}

export function* quizSaga() {
	yield all([fork(watchGetQuiz)]);
}
