// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1 // tracker to add values into matrix
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        // build the Topmost Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[ startRow ][ i ] = counter
            counter++
        }

        // build the column on the half-bottom right
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            results[ i ][ endColumn ] = counter
            counter++
        }

        // Bottom Row (beyond the last column)
        endColumn--
        for (let i = endColumn; i >= startColumn; i--) {
            results[ endRow ][ i ] = counter
            counter++
        }

        // move to one row up above
        endRow--

        // build the start column
        for (let i = endRow; i >= startRow; i--) {
            results[ i ][ startColumn ] = counter
            counter++
        }

        // move inwards from the start column
        startColumn++
    }

    return results
}

module.exports = matrix
