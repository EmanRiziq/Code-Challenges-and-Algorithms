'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function sortedArrayToBST(sortedArr) {
    if (sortedArr.length === 0) {
        return null;
    }
    let mid = Math.floor(sortedArr.length / 2);
    let root = new Node(sortedArr[mid]);
    root.left = sortedArrayToBST(sortedArr.slice(0, mid));
    root.right = sortedArrayToBST(sortedArr.slice(mid + 1));
    return root;
}

module.exports = { Node, sortedArrayToBST };