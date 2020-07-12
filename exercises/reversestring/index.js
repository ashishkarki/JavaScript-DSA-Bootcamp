// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION: 1
    // let reversed = ''

    // for (let c of str) {
    //     reversed = c + reversed
    // }

    // return reversed

    // SOLUTION: 2
    //return str.split('').reverse().join('')

    // SOLUTION: 3
    // debugger
    return str.split('').reduce((reversed, character) => character + reversed, '')
}
//reverse('abcd')
module.exports = reverse
