function selectionSort ( arr ) //sorts from beginning
{
    for ( let i = 0; i < arr.length; i++)
    {
        let lowest = i;
        for( let j = i+1; j < arr.length; j++)
        {
            if( arr[ lowest ] > arr [ j ])
            {
                lowest = j;
            }
        }

        if( arr[ lowest ] !== arr[ i ] )
        {
            let temp = arr[ lowest ];
            arr[ lowest ] = arr[ i ];
            arr[ i ] = temp;
        }
    }

    return arr;
}

//better than bubble sort in no of swaps
//worse than bubble sort in nearly sorted cases

console.log( selectionSort( [ 5, 4, 3, 2, 1 ] ) );