export type TriviaCategory = {
	/** 카테고리 id */
	id: number;

	/** 카테고리 이름 */
	name: string;
};

export type GetCategoryResponse = {
	/** 카테고리 리스트 */
	trivia_categories: TriviaCategory[];
};
