const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings()
{
    let collect = [];

    for( const item in arguments[0] )
    {
        if( Object.getPrototypeOf( arguments[0][item]) === Object.getPrototypeOf( { }) )
        {
            collect = collect.concat( collectStrings( arguments[0][item] ))
        }
        else if( Object.getPrototypeOf( arguments[0][item]) === Object.getPrototypeOf( 'string' ) )
        {
            collect.push( arguments[0][item] );
        }
    }

    return collect;
}

console.log( collectStrings(obj) ); // ["foo", "bar", "baz"])