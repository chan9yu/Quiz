import type { QuizData, TriviaCategory } from '.';

/** quiz 전역상태 타입 */
export type QuizState = {
	getQuizLoading: boolean;
	getQuizSuccess: boolean;
	getQuizError: string | null;
	quiz: QuizData[] | null;
};

/** quiz 전역상태 타입 */
export type CategoryState = {
	getCategoryLoading: boolean;
	getCategorySuccess: boolean;
	getCategoryError: string | null;
	categories: TriviaCategory[];
};
