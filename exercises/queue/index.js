// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor () {
        this.data = []
    }

    add(element) {
        // add element to the start of data array !!
        //this.data.unshift(element)

        // actually lets add to the end of the array
        this.data.push(element)
    }

    remove() {
        // remove from the end of the queue
        //return this.data.pop()

        // actually lets remove from the front of the queue
        return this.data.shift()
    }
}

module.exports = Queue
