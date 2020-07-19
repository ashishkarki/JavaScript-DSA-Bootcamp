// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack')

class Queue {
    constructor () {
        this.addStack = new Stack()
        this.removeStack = new Stack()
    }

    add(element) {
        this.addStack.push(element)
    }

    remove() {
        while (this.addStack.peek()) {
            this.removeStack.push(this.addStack.pop())
        }

        const removedElem = this.removeStack.pop()

        // restore addStack
        while (this.removeStack.peek()) {
            this.addStack.push(this.removeStack.pop())
        }

        return removedElem
    }

    peek() {
        while (this.addStack.peek()) {
            this.removeStack.push(this.addStack.pop())
        }

        const peekedElem = this.removeStack.peek()

        // restore addStack
        while (this.removeStack.peek()) {
            this.addStack.push(this.removeStack.pop())
        }

        return peekedElem
    }

}

module.exports = Queue

// MY IMPLEMENTATION COMMENTED 
/*
add(element) {
        this.addStack.push(element)
    }

    remove() {
        if (this.removeStack.peek()) {
            return this.removeStack.pop()
        } else if (this.addStack.peek()) {
            while (this.addStack.peek()) {
                this.removeStack.push(this.addStack.pop())
            }

            return this.removeStack.pop()
        } else {

            return undefined
        }
    }

    peek() {
        return this.removeStack.peek()
    }
*/
