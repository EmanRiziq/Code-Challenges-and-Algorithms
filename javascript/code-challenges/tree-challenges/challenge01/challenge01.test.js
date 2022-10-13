// Write your test here
const Node = require('../challenge01/challenge01')


describe('Testing creeating tree', () => {
    test('Sum of two numbers', () => {
        let In = ['D', 'B', 'E', 'A', 'F', 'C'];
        let pre = ['A', 'B', 'D', 'E', 'C', 'F'];
        let len = In.length;
        root = buildTree(In, pre, 0, len - 1);
        expect(sum(1, 1)).toEqual(2);
    });
});