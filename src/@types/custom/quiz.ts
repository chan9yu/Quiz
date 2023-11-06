export type IncorrectQuizData = {
	correct_answer: string;
	question: string;
};

export type ResultData = {
	/** 총 퀴즈 수 */
	quizCount: number;

	/** 틀린 퀴즈에 대한 정보 리스트 */
	incorrectQuizData: IncorrectQuizData[];

	/** 퀴즈를 마칠 때까지 소요된 시간 */
	seconds: string;
};
