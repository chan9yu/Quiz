import type { ResponseCode } from './common';

/** quiz api 요청 파라미터 타입 */
export type QuizRequestParams = {
	/** 질문 수 */
	amount: number;

	/** 카테고리 id */
	category?: number;

	/** 난이도 */
	difficulty?: 'easy' | 'medium' | 'hard';

	/** 유형 */
	type?: 'multiple' | 'boolean';

	/** 인코딩 */
	encode?: 'url3986' | 'base64';

	/** 세션 토큰 */
	token?: string;
};

/** quiz 데이터 타입 */
export type QuizData = {
	/** 카테고리 */
	category: string;

	/** 유형 */
	type: string;

	/** 난이도 */
	difficulty: string;

	/** 퀴즈에 대한 질문 */
	question: string;

	/** 정답 */
	correct_answer: string;

	/** 정답을 제외한 나머지 지문들 */
	incorrect_answers: string[];
};

/** quiz api 응답타입 */
export type QuizListResponse = {
	/** 응답 결과에 대한 코드 */
	response_code: ResponseCode;

	/** 퀴즈 데이터 리스트 */
	results: QuizData[];
};
