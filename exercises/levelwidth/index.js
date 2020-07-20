// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const END_OF_LEVEL_TOKEN = 'end-of-level'
    const widths = [ 0 ]
    const array = [ root, END_OF_LEVEL_TOKEN ]

    while (array.length > 1) {// there must be something more than the end of level token in the array
        const topNode = array.shift()

        // new level is starting
        if (topNode === END_OF_LEVEL_TOKEN) {
            // move the token to end of array
            array.push(END_OF_LEVEL_TOKEN)

            // create a new widths array entry
            widths.push(0)
        } else {

            // if it is a regular node, push its children into array
            array.push(...topNode.children)

            // increase the last entry in widths to indicate that we found a new node at this level
            widths[ widths.length - 1 ] += 1
        }
    }

    return widths
}

module.exports = levelWidth
