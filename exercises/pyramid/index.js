// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    // SOLUTION 1
    // const colConstraint = 2 * n - 1
    // const midPoint = Math.floor(colConstraint / 2)

    // for (let row = 0; row < n; row++) {
    //     let level = '' // stair for each level of pyramid
    //     for (let column = 0; column < colConstraint; column++) {
    //         if (column >= midPoint - row &&
    //             column <= midPoint + row) {
    //             level += '#'
    //         } else {
    //             level += ' '
    //         }
    //     }

    //     console.log(level)
    // }

    // SOLUTION 2: RECURSIVE
    if (row === n) {
        return // done printing all rows
    }

    if (level.length == (2 * n - 1)) {
        console.log(level)

        // move to new row
        return pyramid(n, row + 1, '')
    }

    // when to print '#'
    const levlLen = level.length
    const midPoint = Math.floor((2 * n - 1) / 2)
    if (levlLen >= midPoint - row && levlLen <= midPoint + row) {
        level += '#'
    } else {
        level += ' '
    }

    // condition for same row, but new column (or level.length)
    pyramid(n, row, level)
}

module.exports = pyramid
