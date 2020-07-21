// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // in every loop move the largest item to the right
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[ j ] > arr[ j + 1 ]) {
                // if the item on left is greater than item on right, move left-item towards right
                const lesser = arr[ j ]
                arr[ j ] = arr[ j + 1 ]
                arr[ j + 1 ] = lesser
            }
        }
    }

    return arr
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // assume element at i is the smallest element currently
        let indexOfMin = i

        // check rest of the array if indexOfMin is smallest
        for (let j = (i + 1); j < array.length; j++) {
            if (array[ j ] < array[ indexOfMin ]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            const lesser = array[ indexOfMin ]
            array[ indexOfMin ] = array[ i ]
            array[ i ] = lesser
        }
    }

    return array
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

// takes two sorted arrays and merges them into new, sorted array
function merge(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[ 0 ] < right[ 0 ]) {
            results.push(left.shift())
        } else if (left[ 0 ] > right[ 0 ]) {
            results.push(right.shift())
        }
    }

    return [ ...results, ...left, ...right ]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
