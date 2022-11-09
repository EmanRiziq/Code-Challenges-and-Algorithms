// Write here the code challenge solution

function findSum(Arr, num) {
    const hashTable = {}
    for (let i = 0; i <= Arr.length; i++) {
        var x = num - Arr[i]
        console.log(x);
        if (hashTable[Arr[i + 1]]) {
            return true;
        }
        hashTable[x] = (Arr[i])
    }
    return false
}
const a = [-1, 3, 7, -4, 9]
console.log(findSum(a, 6));

module.exports = findSum;