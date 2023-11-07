import { describe, expect, it } from 'vitest';
import { isValidJSON } from '..';

describe('isValidJSON 함수', () => {
	it('유효한 JSON 문자열일 경우 파싱된 객체를 반환해야 함', () => {
		const jsonString = '{"key": "value"}';
		const parsedObject = isValidJSON(jsonString);
		expect(parsedObject).toEqual({ key: 'value' });
	});

	it('유효하지 않은 JSON 문자열일 경우 false를 반환해야 함', () => {
		const notJsonString = 'keyValue';
		const parsedObject = isValidJSON(notJsonString);
		expect(parsedObject).toBe(false);
	});
});
