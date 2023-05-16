function compare ( a, b) {
    return a - b;
}

function compareByLength ( a, b ){
    return a.length - b.length;
}

function compareByLengthReverse ( a, b ){
    return b.length - a.length;
}

console.log( [ 1, 7, -12, 10, 0, -2 ].sort(  ) ); //string based sort based on unicode

console.log( [ 1, 7, -12, 10, 0, -2 ].sort( compare ) );

console.log( [ "abc", "bcde", "edfgggh", "a", "ab"].sort( compareByLength ) );

console.log( [ "abc", "bcde", "edfgggh", "a", "ab"].sort( compareByLengthReverse ) );