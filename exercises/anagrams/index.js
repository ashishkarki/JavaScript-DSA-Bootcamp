// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // SOLUTION 1
    // ^ means negated, [] means a set or group
    // this matches all characters which are not in the \w (words => alphabets and underscores) set
    // meaning this helps find all non-word characters like punctuation
    /*const nonWordRegex = /[^\w]/g

    // remove special characters and change to lowercase
    stringA = nonWordsCleaner(stringA)
    stringB = nonWordsCleaner(stringB)

    // create character map of both and compare for anagram
    const charMapA = charMapBuilder(stringA)
    const charMapB = charMapBuilder(stringB)

    // if they don't have same length of words, they aren't anagrams
    if (Object.keys(charMapA).length !== Object.keys((charMapB)).length) {
        return false
    }

    for (let char in charMapA) {
        if (charMapA[ char ] !== charMapB[ char ]) {
            return false
        }
    }

    return true
    */

    // SOLUTION 2
    return stringCleaner(stringA) === stringCleaner(stringB)
}

function stringCleaner(inputStr) {
    return inputStr.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// function nonWordsCleaner(inputStr) {
//     const nonWordRegex = /[^\w]/g

//     // remove special characters and change to lowercase
//     return inputStr.replace(nonWordRegex, '').toLowerCase()
// }

// function charMapBuilder(wordsStr) {
//     const charMap = {}

//     for (const char of wordsStr) {
//         charMap[ char ] = (charMap[ char ] + 1) || 1
//     }

//     return charMap
// }

module.exports = anagrams
