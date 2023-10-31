/** API BASE URL */
export const API_URL = 'https://opentdb.com/' as const;

/** API HTTP 메소드 모음 */
export enum HTTP_METHOD {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	PATCH = 'patch',
	DELETE = 'delete'
}

/** API ROUTER 모음 */
export enum API_PATH {
	QUIZ = 'api.php',
	TOKEN = 'api_token.php',
	CATEGORY = 'api_category.php'
}
