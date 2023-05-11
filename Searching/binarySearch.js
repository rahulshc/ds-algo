function binarySearch(){
    // add whatever parameters you deem necessary - good luck!
    let startIndex = 0;
    let endIndex = arguments[0].length - 1;
    
    while ( startIndex < endIndex )
    {
        let middleIndex = Math.round( (startIndex + endIndex)  /2 );
        
        if( arguments[0][ middleIndex ] === arguments[1] ) return middleIndex;
        
        else if ( arguments[0][ middleIndex ] < arguments[1] ) startIndex = middleIndex;
        
        else endIndex = middleIndex;
    }
    
    return -1;
  }