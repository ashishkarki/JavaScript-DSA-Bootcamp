// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // REF SOLUTION 1
    // realize that we are creating a square of stairs
    // for (let row = 0; row < n; row++) {
    //     let stair = ''
    //     for (let column = 0; column < n; column++) {
    //         if (column <= row) { // * very important logic
    //             stair += '#'
    //         } else {
    //             stair += ' '
    //         }
    //     }

    //     console.log(stair)
    // }

    // REF SOLUTION 2 (WITH RECURSION)

    // the base case to return/end recursion
    if (row === n) {
        return // all rows are now printed
    }

    // do some core logic
    if (n === stair.length) {
        // current column is assembled, print it out
        console.log(stair)

        // move to new row i.e. recurse with some updated condition
        return steps(n, row + 1, '') // use an empty stair
    }

    if (stair.length <= row) { // col.len <= row length
        stair += '#'
    } else {
        stair += ' '
    }

    steps(n, row, stair) // current row with its building stair
}

module.exports = steps
