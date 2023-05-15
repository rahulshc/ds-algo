function compare ( a, b) {
    return a - b;
}

console.log( [ 1, 7, -12, 10, 0, -2 ].sort(  ) ); //string based sort based on unicode

console.log( [ 1, 7, -12, 10, 0, -2 ].sort( compare ) );