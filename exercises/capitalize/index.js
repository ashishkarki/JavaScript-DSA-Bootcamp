// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // MY SOLUTION 1
    // ! BETTER SOLUTION THAN SOLUTION 2 BELOW
    // let words = []

    // for (const inputWord of str.split(' ')) {
    //     words.push(
    //         inputWord[ 0 ].toUpperCase() +
    //         inputWord.slice(1)
    //     )
    // }

    // return words.join(' ')

    // SOLUTION 2
    let result = str[ 0 ].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        // if the character to the left of current character is a space, then this is a new word, so capitalize te first character of that word
        if (str[ i - 1 ] === ' ') {
            result += str[ i ].toUpperCase()
        } else {
            result += str[ i ]
        }
    }

    return result
}

module.exports = capitalize
