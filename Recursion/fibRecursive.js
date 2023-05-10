function fib( seq ){
    // add whatever parameters you deem necessary - good luck!
    
    if ( seq === 1 || seq === 2 ) return 1;
    
    return fib ( seq - 1 ) + fib( seq - 2 );
  }

console.log( fib( 5 ) );