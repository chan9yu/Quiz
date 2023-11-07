import { describe, expect, it } from 'vitest';
import { shuffleArray } from '..';

describe('shuffleArray 함수', () => {
	it('배열의 길이가 변하지 않아야 함', () => {
		const testArray = ['1', '2', '3', '4', '5'];
		const shuffledArray = shuffleArray(testArray);

		expect(testArray.length).toBe(shuffledArray.length);
	});

	it('배열의 순서가 섞여야 함', () => {
		const testArray = ['1', '2', '3', '4', '5'];
		const shuffledArray = shuffleArray(testArray);

		expect(testArray).not.toEqual(shuffledArray);
	});

	it('빈 배열이 들어올 경우 빈 배열을 반환해야 함', () => {
		const emptyArray: string[] = [];
		const shuffledArray = shuffleArray(emptyArray);

		expect(shuffledArray).toEqual([]);
	});
});
