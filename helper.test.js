import { add } from './helper.js';

describe('first', () => {
    test('should first', () => {
        expect(true).toBe(true);
        expect(add(1, 2)).toBe(3);
    });
});
