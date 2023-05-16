function bubbleSort( arr ){ //sorts from last
    let noSwaps;
    for( let i = arr.length; i > 0; i--){
        noSwaps = true;
        for( let j = 0; j < i - 1; j++ ){
            if( arr[ j ] > arr [ j + 1 ] )
            {
                let temp = arr[ j ];
                arr[ j ] = arr[ j + 1 ];
                arr[ j + 1 ] = temp;
                
                noSwaps = false;
            }
        }

        if( noSwaps ) break;
    }

    return arr;
}

//for nearly or already sorted O(n) otherwise O(n^2)

console.log( bubbleSort( [ 5, 4, 3, 2, 1 ] ) );