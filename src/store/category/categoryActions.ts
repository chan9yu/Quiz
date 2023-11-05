import type { GetCategoryResponse } from '../../@types';

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST' as const;
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS' as const;
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE' as const;

export const getCategoryRequestAction = () => ({
	type: GET_CATEGORY_REQUEST
});

export const getCategorySuccessAction = (data: GetCategoryResponse) => ({
	type: GET_CATEGORY_SUCCESS,
	data
});

export const getCategoryFailureAction = (error: string) => ({
	type: GET_CATEGORY_FAILURE,
	error
});

export type CategoryActionTypes =
	| ReturnType<typeof getCategoryRequestAction>
	| ReturnType<typeof getCategorySuccessAction>
	| ReturnType<typeof getCategoryFailureAction>;
