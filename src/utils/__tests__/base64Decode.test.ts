import { describe, expect, it } from 'vitest';
import { base64Decode } from '..';

describe('base64Decode 함수', () => {
	it('base64로 인코딩된 문자열을 디코딩해야 함', () => {
		const encodedString = btoa('hello world');
		const decodedString = base64Decode(encodedString);

		expect(decodedString).toBe('hello world');
	});

	it('유효하지 않은 base64 문자열이 들어올 경우 null을 반환해야 함', () => {
		const decodedString = base64Decode('invalid-base64-string');
		expect(decodedString).toBeNull();
	});
});
