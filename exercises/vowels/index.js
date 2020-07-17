// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // MY SOLUTION: 1
    /*const vowelSet = [ 'a', 'e', 'i', 'o', 'u' ]
    let vowelCount = 0

    for (let ch of str.toLowerCase()) {
        if (vowelSet.includes(ch)) {
            vowelCount++
        }
    }

    return vowelCount
    */

    // REF SOLUTION 2
    // .match returns null if there are no matches
    const matches = str.match(/[aeiou]/gi)

    return matches ? matches.length : 0
}

module.exports = vowels
