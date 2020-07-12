// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // SOLUTION: 1
    // const reversed = str.split('').reverse().join('')
    // return str === reversed

    // SOLUTION: 2
    return str.split('').every((sChar, curIndex) => {
        if (curIndex > str.length / 2) {
            return true
        }

        return sChar === str[ str.length - 1 - curIndex ]
    })
}

module.exports = palindrome
