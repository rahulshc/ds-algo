function insertionSort( arr ) {
    for( let i = 1; i< arr.length; ++i ){
        let currentVal = arr[ i ];
        let j;
        for( j = i-1; j >= 0 && arr[ j ] > currentVal; j-- ){
            arr[ j + 1 ] = arr[ j ];
        }

        arr[ j+ 1 ] = currentVal;
    }

    return arr;
}

//worst case complexity O(n^2)
//best case complexity O(n)
//for nearly sorted O(n) inner loop will run fewer times in these cases
//best for cases when data is incrementally received and we need to keep it sorted

console.log( insertionSort([ 8, 6, 7, 5, 4, 3 , 2 ,1 ]));