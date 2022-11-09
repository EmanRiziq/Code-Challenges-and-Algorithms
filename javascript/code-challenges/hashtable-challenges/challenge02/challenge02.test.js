// Write your test here
// Write your test here

const findRepeatedWord = require('./challenge02.js');

describe('Testing challenge 01', () => {
    test('It should return No Repetition if the array is empty', () => {
        let sentence = ('');
        let result = findRepeatedWord(sentence);
        expect(result).toEqual('No Repetition');
    });

    test('It should return the repeated string', () => {
        let sentence = 'ASAC is a department at LTUC. ASAC teaches programming in LTUC';
        let result = findRepeatedWord(sentence);
        expect(result).toEqual('ASAC');
    });
    test('It should return  No Repetition  if ter is no repeated string ', () => {
        let sentence = 'I am learning programming at ASAC.';
        let result = findRepeatedWord(sentence);
        expect(result).toEqual('No Repetition');
    });
})