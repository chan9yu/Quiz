import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { categoryAPIs } from '../../apis';
import * as actions from './categoryActions';

function* getCategory() {
	try {
		const { data } = yield call(categoryAPIs.getCategory);
		yield put(actions.getCategorySuccessAction(data));
	} catch (error) {
		yield put(actions.getCategoryFailureAction(error as unknown as string));
	}
}

function* watchGetCategory() {
	yield takeLatest(actions.GET_CATEGORY_REQUEST, getCategory);
}

export function* categorySaga() {
	yield all([fork(watchGetCategory)]);
}
