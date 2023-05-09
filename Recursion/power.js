function power( base, exponent ){
    if ( exponent === 1 ) return base;
    
    if ( exponent === 0 ) return 1;
    
    return base * power ( base, exponent -1 );
}

console.log( power( 2, 0) );
console.log( power( 2, 1) );
console.log( power( 2, 7) );