function flatten(){
    // add whatever parameters you deem necessary - good luck!

    let new_arr = [];

    if( arguments[0].length === 0 ) return new_arr;

    if( arguments[0].length === 1 && !Array.isArray( arguments[0][0] )) 
    {
        new_arr.push( arguments[0][0] );
        return new_arr;
    }

    if( !Array.isArray( arguments[0][0] ) ) new_arr.push( arguments[0][0] );

    if( Array.isArray( arguments[0][0] ))  
    {
        new_arr = new_arr.concat( flatten( arguments[0][0] ));
    }

    return new_arr.concat( flatten( arguments[0].slice( 1 ) ));
  }
  
  //console.log( flatten([1, 2, 3, [4,5], 6 ]) ); // [1, 2, 3, 4, 5]
  //console.log( flatten([1, [2, [3, 4], [[5]]]]) ); // [1, 2, 3, 4, 5]
  //console.log( flatten([[1],[2],[3]]) ); // [1,2,3]
  console.log( flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) ); // [1,2,3]