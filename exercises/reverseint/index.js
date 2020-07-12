// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // SOLUTION 1
    // const mathSign = Math.sign(n)
    // if (mathSign == 0) {
    //     return n
    // } else if (mathSign == -1) {
    //     // negative number
    //     const unsignedIntStr = n.toString().substring(1, n.toString().length)
    //     const reversedUnsignedIntStr = unsignedIntStr.split('').reverse().join('')

    //     return parseInt('-'.concat(reversedUnsignedIntStr))
    // } else {
    //     // positive number
    //     return parseInt(n.toString().split('').reverse().join(''))
    // }

    // SOLUTION 2
    // ! IMPORTANT: use this
    const reversedStr = n.toString().split('').reverse().join('')

    return parseInt(reversedStr) * Math.sign(n)
}

module.exports = reverseInt
