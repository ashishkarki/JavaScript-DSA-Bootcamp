// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    // insert node at the head
    insertFirst(data) {
        // const newNode = new Node(data, this.head)
        // this.head = newNode

        this.insertAt(data, 0)
    }

    size() {
        let cursor = this.head
        let sizeCount = 0

        while (cursor !== null) {
            sizeCount++
            cursor = cursor.next
        }

        return sizeCount
    }

    // get the first/head node
    getFirst() {
        // return this.head
        return this.getAt(0)
    }

    // get the last node
    getLast() {
        // if (!this.head) {
        //     return null
        // }

        // let cursor = this.head
        // while (cursor.next !== null) {
        //     cursor = cursor.next
        // }
        // return cursor

        return this.getAt(this.size() - 1)
    }

    // empty out the LinkedList
    clear() {
        this.head = null
    }

    // remove the head node
    removeFirst() {
        // if (!this.head) {
        //     return
        // }

        // this.head = this.head.next
        this.removeAt(0)
    }

    removeLast() {
        // if (!this.head) {
        //     return
        // }

        // // if only one node
        // if (!this.head.next) {
        //     this.head = null
        //     return
        // }

        // let prev = this.head
        // let cur = this.head.next

        // while (cur.next !== null) {
        //     prev = cur
        //     cur = cur.next
        // }

        // prev.next = null

        this.removeAt(this.size() - 1)
    }

    insertLast(data) {
        // if (!this.head) {
        //     this.head = new Node(data)
        // }

        // let cur = this.head
        // while (cur.next) {
        //     cur = cur.next
        // }
        // cur.next = new Node(data)

        // const last = this.getLast()

        // if (last) {
        //     // There are some existing nodes in our chain
        //     last.next = new Node(data)
        // } else {
        //     // The chain is empty!
        //     this.head = new Node(data)
        // }

        this.insertAt(data, this.size())
    }

    printer(fxName) {
        console.log(`Printing form ${ fxName || 'fx' }`)

        let cur = this.head

        if (!cur) {
            console.log('No any nodes')
        } else {
            let str = ''
            while (cur !== null) {
                str += '| Node: ' + cur.data
                cur = cur.next
            }

            console.log(str + '\n, with size: ' + this.size())
        }
    }

    getAt(index) {
        let curIndex = 0
        let curNode = this.head

        while (curNode) {
            if (curIndex === index) {
                return curNode
            }

            curIndex++
            curNode = curNode.next
        }

        return null
    }

    removeAt(index) {
        if (!this.head) {
            return null
        }

        // if removing the first element
        if (index == 0) {
            this.head = this.head.next
            return
        }

        // other classes
        const prev = this.getAt(index - 1)
        // array out of bounds
        if (!prev || !prev.next) {
            return
        }
        prev.next = prev.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        // other classes
        const prev = this.getAt(index - 1) || this.getLast()
        const newNode = new Node(data, prev.next)
        prev.next = newNode
    }

    forEach(fn) {
        for (let i = 0; i < this.size(); i++) {
            fn(this.getAt(i))
        }
    }
}

module.exports = { Node, LinkedList }
