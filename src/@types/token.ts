import type { ResponseCode } from './common';

export type ResetTokenRequestParams = {
	/** 현재 가지고있는 세션토큰 */
	token: string;
};

export type SearchTokenResponse = {
	/** 응답 결과에 대한 코드 */
	response_code: ResponseCode;

	/** 응답 결과에 대한 메세지 */
	response_message: string;

	/** 발급된 세션토큰 */
	token: string;
};

export type ResetTokenResponse = {
	/** 응답 결과에 대한 코드 */
	response_code: ResponseCode;

	/** 새로 발급된 세션토큰 */
	token: string;
};
