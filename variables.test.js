import { push } from './objects';

describe('given push function', () => {
    test('it should throw an error if not array', () => {
        // arrange
        const item = '';
        const array = '';
        // act
        const result =
            //assert
            expect(() => {
                push(array, item);
            }).toThrow('El input deb ser tipo array');
    });
    test('it should throw an error if not array', () => {
        // arrange
        const item = '';
        const array = '';
        // act
        const result = push(array, item);
        //assert
        expect(result).toBe();
    });
});
let presi = {
    name: 'Pooh',
    next: null,
};
