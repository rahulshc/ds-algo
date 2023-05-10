function isPalindrome( original_string ){
    // add whatever parameters you deem necessary - good luck!

    function reverse ( original_string )
    {
        let new_string = '';
        if ( original_string.length === 1 ) return original_string;
        return new_string.concat( original_string[ original_string.length - 1 ] ).concat( reverse ( original_string.slice( 0, original_string.length - 1 ) ) );
    }

    if ( original_string === reverse ( original_string ) ) return true;

    return false;
  }

  console.log( isPalindrome( 'c' ) );