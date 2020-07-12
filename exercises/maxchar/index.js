// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxCharacter = ''

    for (let char of str) {
        // if (chars[ char ]) {
        //     chars[ char ]++
        // } else {
        //     chars[ char ] = 1
        // }
        charMap[ char ] = charMap[ char ] + 1 || 1
    }

    // use for..in to iterate in object: https://alligator.io/js/for-of-for-in-loops/
    // for (let char in charMap) {
    //     if (charMap[ char ] > max) {
    //         max = charMap[ char ]
    //         maxCharacter = char
    //     }
    // }
    // return maxCharacter

    const sorted = Object.entries(charMap).sort((a, b) => b[ 1 ] - a[ 1 ])
    return sorted[ 0 ][ 0 ]
}

module.exports = maxChar

/*
// SOLUTION 1
    // * MY SOLUTION
    const map = new Map()
    for (let char of str.split('')) {
        if (null !== map.get(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
        debugger
    }

    const sortedMap = [ ...map.entries() ].sort((a, b) => b[ 1 ] - a[ 1 ])

    return sortedMap[ 0 ][ 0 ]
*/