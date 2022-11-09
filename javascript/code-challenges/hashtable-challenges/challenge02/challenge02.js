// Write here the code challenge solution
function findRepeatedWord(sentence) {
    const words = sentence.split(' ')
    console.log(words);
    const hashTable = {}
    for (let i = 0; i <= words.length; i++) {
        if (hashTable[words[i]]) {
            return hashTable[words[i]];
        }
        hashTable[words[i]] = (words[i])
    }
    return 'No Repetition'
}

console.log(findRepeatedWord('ASAC is a department at LTUC. ASAC teaches programming in LTUC.'));
module.exports = findRepeatedWord;