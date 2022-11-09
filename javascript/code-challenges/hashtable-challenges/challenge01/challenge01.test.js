// Write your test here

const findSum = require('./challenge01.js');

describe('Testing challenge 01', () => {
    test('It should return false if the array is empty', () => {
        let array = [];
        let result = findSum(array, 10);
        expect(result).toEqual(false);
    });

    test('It should return true if it find two numbers the summation of them equal the number on parameter ', () => {
        let array = [1, 3, 7, -4, 9];
        let result = findSum(array, 10);
        expect(result).toEqual(true);
    });
    test('It should return true if it not find two numbers the summation of them equal the number on parameter ', () => {
        let array = [1, 3, 7, -4, 9];
        let result = findSum(array, 100);
        expect(result).toEqual(false);
    });
})