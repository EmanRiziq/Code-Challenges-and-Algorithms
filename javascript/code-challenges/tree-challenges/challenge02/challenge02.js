// Write here the code challenge solution
// expect(breadthFirstCheck(,)).toBe(true);
// { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }
// { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }

function breadthFirstCheck ( p, q ) {
    if ( !p && !q ) return true;
    if ( !p || !q ) return false;
    if ( p.value !== q.value ) return false;
    return (
        breadthFirstCheck( p.left, q.left ) &&
        breadthFirstCheck( p.right, q.right )
    );
}

module.exports = breadthFirstCheck;