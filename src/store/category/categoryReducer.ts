import { produce } from 'immer';

import type { CategoryState } from '../../@types';
import * as actions from './categoryActions';

const initialState: CategoryState = {
	getCategoryLoading: false,
	getCategorySuccess: false,
	getCategoryError: null,
	categories: []
};

export const categoryReducer = (state = initialState, action: actions.CategoryActionTypes) =>
	produce(state, draft => {
		switch (action.type) {
			case actions.GET_CATEGORY_REQUEST:
				draft.getCategoryLoading = true;
				draft.getCategorySuccess = false;
				draft.getCategoryError = null;
				break;
			case actions.GET_CATEGORY_SUCCESS:
				draft.getCategoryLoading = false;
				draft.getCategorySuccess = true;
				draft.categories = action.data.trivia_categories;
				break;
			case actions.GET_CATEGORY_FAILURE:
				draft.getCategoryLoading = false;
				draft.getCategoryError = action.error;
				break;
			default:
				break;
		}
	});
