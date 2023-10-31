import { AxiosPromise } from 'axios';

import type { GetCategoryResponse } from '../@types';
import { API_PATH, HTTP_METHOD } from '../constants';
import { createInstance } from './base';

const categoryInstance = createInstance(API_PATH.CATEGORY);
export const categoryAPIs = {
	/** 카테고리 조회: API */
	getCategory: (): AxiosPromise<GetCategoryResponse> =>
		categoryInstance({
			method: HTTP_METHOD.GET
		})
};
