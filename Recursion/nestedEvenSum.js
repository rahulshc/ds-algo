function nestedEvenSum () {
    // add whatever parameters you deem necessary - good luck!

    let sum = 0;

    for( const item in arguments[0] )
    {
        if( Object.getPrototypeOf( arguments[0][item]) === Object.getPrototypeOf( { }) ) 
        {
            sum += nestedEvenSum(arguments[0][item] );
        }

        else if ( Number.isInteger( arguments[0][item] ) &&  arguments[0][item] > 0 &&  arguments[0][item]%2===0 )
        {
            sum+=arguments[0][item];
        }
        
    }

    return sum;
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10