// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // MY SOLTION: 1 BELOW DIDN' WORK

    // REF SOLUTION 1
    /*
    * Algorithm
    1. Create an empty arry to hold individual chunks called 'chunked'
    2. For each element in the 'unchunked' array
        2.1 Retrieve the last element (which is also a chunk array) in 'chunked'
        2.2 If last element does not exist (i.e. there is no chunks yet), or if its length is equal to chunk size (i.e. the last chunk is already full)
            2.2.1 Create a new chunk with the current element and then push this chunk/array into 'chunked' array
        2.3 Else, add the current element into the chunk (the sub-array)
    */
    // let chunked = []
    // let chunkCount = -1
    // for (const elem of array) {
    //     // is  there a previous chunk within chunked array
    //     const lastChunk = chunked[ chunked.length - 1 ]

    //     if (!lastChunk || lastChunk.length == size) {
    //         chunked.push([ elem ])
    //     } else {
    //         //chunked[ chunked.length - 1 ].push(elem)
    //         // since lastChunk gets  a reference, we can also do:
    //         lastChunk.push(elem)
    //     }
    // }

    // return chunked

    // REF SOLUTION 2
    // ! MUCH CONCISE, BETTER SOLUTION
    /*
    1. Create an empty 'chunked' array 
    2. Create a variable 'index' and set it to 0
    3. While the index is less than array.length, do following:
        3.1 Push a slice of (index, index + size) array into chunked
        3.2 Add size to index i.e index += size
    */
    const chunked = []
    let index = 0
    while (index < array.length) {
        const sliced = array.slice(index, index + size)
        chunked.push(sliced)

        index += size
    }

    return chunked
}


/*
 let result = []
    let start = 0
    let stop = size

    while (stop <= array.length) {

        let sliced = array.slice(start, stop)
        result.push(sliced)

        start += size
        stop += size
        if (stop > array.length) {
            stop = array.length - 1
            sliced = array.slice(start, stop)
            result.push(sliced)
            break
        }
        console.log(`start: ${ start }, stop: ${ stop }`)
    }
    return result
*/

module.exports = chunk
