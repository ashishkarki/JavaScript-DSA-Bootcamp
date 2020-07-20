// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head
    let fast = list.head

    // first phase, slow is unchanged, fast moves by n nodes
    while (n > 0) {
        fast = fast.next
        n--
    }

    // second phase onwards, both fast and slow move by 1 node each; until fast reaches the last node
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    // when fast reaches the last node, the slow node points to the nth node from last node`
    return slow
}

module.exports = fromLast
