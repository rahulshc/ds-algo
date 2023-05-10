// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive( ){
    // add whatever parameters you deem necessary - good luck!

    if( arguments[0].length ===1  ) return arguments[1]( arguments[0][0] );

    return ( arguments[1]( arguments[0][ 0 ]) || someRecursive( arguments[0].slice( 1 ), arguments[ 1 ] ));
  }

//console.log( isOdd( 23 ) );

console.log( someRecursive([2,2,2,2], isOdd) );