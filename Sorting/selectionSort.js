function selectionSort ( arr )
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

console.log( selectionSort( [ 5, 4, 3, 2, 1 ] ) );