function binarySearch(){
    // add whatever parameters you deem necessary - good luck!
    let startIndex = 0;
    let endIndex = arguments[0].length - 1;
    
    while ( startIndex <= endIndex )
    {
        let middleIndex = Math.round( (startIndex + endIndex)  /2 ); //Math.floor shall work as well
        
        if( arguments[0][ middleIndex ] === arguments[1] ) return middleIndex;
        
        else if ( arguments[0][ middleIndex ] < arguments[1] ) startIndex = middleIndex + 1;
        
        else endIndex = middleIndex -1 ;
    }
    
    return -1;
  }

  console.log( binarySearch([1,2,3,4,5],2) ); // 1
console.log( binarySearch([1,2,3,4,5],3) ); // 2
console.log( binarySearch([1,2,3,4,5],5) );// 4
console.log( binarySearch([1,2,3,4,5],6) );// -1
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) ); // 2
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) );// 16
console.log( binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) ); // -1