import { AxiosPromise } from 'axios';

import type { ResetTokenRequestParams, SearchTokenResponse } from '../@types';
import { API_PATH, HTTP_METHOD } from '../constants';
import { createInstance } from './base';

const tokenInstance = createInstance(API_PATH.TOKEN);

export const tokenAPIs = {
	/** 세션 토큰 검색 API */
	searchToken: (): AxiosPromise<SearchTokenResponse> =>
		tokenInstance({
			method: HTTP_METHOD.GET,
			params: {
				command: 'request'
			}
		}),

	/** 세션 토큰 재설정 API */
	resetToken: (params: ResetTokenRequestParams): AxiosPromise<SearchTokenResponse> =>
		tokenInstance({
			method: HTTP_METHOD.GET,
			params: {
				command: 'reset',
				...params
			}
		})
};
