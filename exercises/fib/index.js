// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n == 0 || n == 1) {
        return n
    }

    // MY SOLUTION 1: ITERATIVE
    /*let fibCounter = 2 // this example is 0-indexed
    let prev = 0, cur = 1
    while (fibCounter <= n) {
        const temp = prev + cur
        prev = cur
        cur = temp

        fibCounter++
    }

    return cur*/

    // * REF SOLUTION 1 ITERATIVE
    /*const result = [ 0, 1 ]

    for (let i = 2; i <= n; i++) {
        result.push(result[ i - 1 ] + result[ i - 2 ])
    }

    return result[ result.length - 1 ] // result[n]
    */

    // REF SOLUTION 2 RECURSIVE
    if (n == 0 || n == 1) { // n < 2
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

module.exports = fib
